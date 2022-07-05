import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@mail.ru',
    description: 'Почта пользователя',
  })
  @IsString({ message: 'Должен быть строкой' })
  @IsEmail({}, { message: 'Некорректный эмейл' })
  readonly email: string;

  @ApiProperty({
    example: 'asd123',
    description: 'Пароль',
  })
  @IsString({ message: 'Должен быть строкой' })
  @Length(4, 16, { message: 'Пороль должен быть не меньше 4 и не больше 16' })
  readonly password: string;
}
