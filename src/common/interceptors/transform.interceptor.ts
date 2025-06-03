import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RESPONSE_MESSAGE_KEY } from '../decorators/response-message.decorator';

export type Response<T> = {
  data: T;
  message: string | null;
  hasData: boolean;
};

export type PaginatedResponse<T, M> = {
  data: T;
  message: string | null;
  hasData: boolean;
  meta: M;
};

export function isEmpty(value: any): boolean {
  if (value == null) return true; // null or undefined
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const responseMessage = this.reflector.get<string>(
      RESPONSE_MESSAGE_KEY,
      context.getHandler(),
    );

    return next.handle().pipe(
      map((data) => ({
        data,
        message: responseMessage ?? null, // fallback if not set
        hasData: !isEmpty(data),
      })),
    );
  }
}
