import { Type } from 'class-transformer';
import { IsInt, Min, Max, IsOptional } from 'class-validator';

export class PaginationOptionsDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  take?: number = 10;

  @IsInt()
  @IsOptional()
  cursor?: string;
}
