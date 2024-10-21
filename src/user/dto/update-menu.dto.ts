import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto as CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
