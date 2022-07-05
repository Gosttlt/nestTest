import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'должен быть строкой' })
  readonly value: string;

  @IsNumber({}, { message: 'должен быть числом' })
  readonly id: string;
}
