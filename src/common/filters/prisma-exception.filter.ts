import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let {
      modelName = 'Record',
      target,
      cause,
    } = (exception?.meta || {}) as {
      modelName?: string;
      target?: string | string[];
      cause?: string;
    };

    target = Array.isArray(target)
      ? target.join(', ')
      : target || modelName || 'Field';

    let exceptionToThrow: HttpException;
    switch (exception.code) {
      case 'P2002': {
        exceptionToThrow = new ConflictException(`${target} already exists.`);
        break;
      }
      case 'P2025': {
        const foreignKeyNotFoundMatch = cause?.match(
          /No '(\w+)' record.*nested connect/,
        );

        const foreignKey = foreignKeyNotFoundMatch
          ? foreignKeyNotFoundMatch[1]
          : modelName;

        // Record not found (e.g., when updating/deleting a non-existent record)
        exceptionToThrow = new NotFoundException(`${foreignKey} not found.`);
        break;
      }
      case 'P2003': {
        // Foreign key constraint failed
        exceptionToThrow = new BadRequestException(
          'Invalid reference to related entity.',
        );
        break;
      }
      default:
        exceptionToThrow = new InternalServerErrorException(
          'Unexpected database error.',
        );
        break;
    }

    response
      .status(exceptionToThrow.getStatus())
      .json(exceptionToThrow.getResponse());
  }
}
