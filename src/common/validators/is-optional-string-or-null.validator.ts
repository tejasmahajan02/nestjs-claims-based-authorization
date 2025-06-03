import { applyDecorators } from '@nestjs/common';
import { IsOptional } from 'class-validator';
import { IsStringOrNull } from './is-string-or-null.validator';

export function IsOptionalStringOrNull() {
  return applyDecorators(IsOptional(), IsStringOrNull());
}
