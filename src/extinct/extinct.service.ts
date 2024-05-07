import { Injectable } from '@nestjs/common';
import { CreateExtinctDto } from './dto/create-extinct.dto';
import { UpdateExtinctDto } from './dto/update-extinct.dto';

@Injectable()
export class ExtinctService {
  create(createExtinctDto: CreateExtinctDto) {
    return 'This action adds a new extinct';
  }

  findAll() {
    return `This action returns all extinct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} extinct`;
  }

  update(id: number, updateExtinctDto: UpdateExtinctDto) {
    return `This action updates a #${id} extinct`;
  }

  remove(id: number) {
    return `This action removes a #${id} extinct`;
  }
}
