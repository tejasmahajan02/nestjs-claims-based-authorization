import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Injectable,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';
import { generateHashedCacheKey } from '../utils/helpers.util';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  private readonly logger = new Logger(HttpCacheInterceptor.name);

  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest<Request>();
    const { path, query } = request;
    const cacheKey = generateHashedCacheKey(path, query);
    return cacheKey;
  }

  override async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest<Request>();
    const { originalUrl } = request;

    const key = this.trackBy(context);
    const isCached = key ? await this.cacheManager.get(key) : null;

    if (isCached) {
      this.logger.debug(`[CACHE HIT] ${originalUrl}`);
    } else {
      this.logger.debug(`[CACHE MISS] ${originalUrl}`);
    }

    // Delegate to the base interceptor
    return super.intercept(context, next);
  }
}
