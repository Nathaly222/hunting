import { PartialType } from '@nestjs/swagger';
import { CreateExtinctDto } from './create-extinct.dto';

export class UpdateExtinctDto extends PartialType(CreateExtinctDto) {}
