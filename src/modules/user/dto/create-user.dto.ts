import { IsEmail, IsNotEmpty } from 'class-validator';
import { Prisma } from 'generated/prisma';
import { IsOptionalStringOrNull } from 'src/common/validators/is-optional-string-or-null.validator';

type UserCreateInput = Pick<Prisma.UserCreateInput, 'name' | 'email'>;

export class CreateUserDto implements UserCreateInput {
  @IsOptionalStringOrNull()
  name?: string | null | undefined;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
