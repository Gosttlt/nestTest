import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'должен быть строкой' })
  readonly value: string;

  @IsString({ message: 'должен быть строкой' })
  readonly description: string;
}
