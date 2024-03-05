import {
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Match } from '../../../common/decorators/match.decorator';

export class CreateUserDto {
  @IsString()
  @MaxLength(32, {
    message:
      'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  @IsNotEmpty()
  userName: string;

  @Min(1)
  @Max(9999999999)
  @IsInt({ message: 'phone should not be empty' })
  @IsNotEmpty()
  phone: number;

  @MinLength(6)
  @MaxLength(12)
  @Matches(/^[A-Za-z][A-Za-z!@#$%^&*()_+\-=\\[\]{};':"|,.<>\/?]{6,12}$/, {
    message: 'should includes 6-12 chars, uppercase letter and special char',
  })
  @IsNotEmpty()
  password: string;

  @MinLength(6)
  @MaxLength(12)
  @Match('password', { message: 'Password confirmation must match Password' })
  @IsNotEmpty()
  passwordConfirm: string;
}
