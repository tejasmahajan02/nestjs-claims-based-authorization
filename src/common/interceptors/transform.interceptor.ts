import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RESPONSE_MESSAGE_KEY } from '../decorators/response-message.decorator';
import { PAGINATED_KEY } from '../decorators/paginated.decorator';
import { Response } from '../types/response.type';
import { isEmpty } from '../utils/helpers.util';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  private readonly logger = new Logger(TransformInterceptor.name);

  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const responseMessage =
      this.reflector.get<string>(RESPONSE_MESSAGE_KEY, context.getHandler()) ??
      null; // fallback if not set

    const isPaginated = this.reflector.get<boolean>(
      PAGINATED_KEY,
      context.getHandler(),
    );

    return next.handle().pipe(
      map((response) => {
        const isPaginatedShape =
          response &&
          typeof response === 'object' &&
          !Array.isArray(response) &&
          'data' in response &&
          'meta' in response;

        if (
          !isPaginated &&
          isPaginatedShape &&
          process.env.NODE_ENV !== 'production'
        ) {
          this.logger.warn(
            `[Pagination] Missing @Paginated() decorator for ${context.getClass().name}.${context.getHandler().name}`,
          );
        }

        if (isPaginated || isPaginatedShape) {
          const { data: items = [], meta = {} } = response ?? {};
          return {
            data: items,
            message: responseMessage,
            hasData: !isEmpty(items),
            meta,
          };
        }

        return {
          data: response,
          message: responseMessage,
          hasData: !isEmpty(response),
          meta: {},
        };
      }),
    );
  }
}
