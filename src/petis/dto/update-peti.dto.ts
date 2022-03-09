import { PartialType } from '@nestjs/mapped-types';
import { CreatePetiDto } from './create-peti.dto';

export class UpdatePetiDto extends PartialType(CreatePetiDto) {}
