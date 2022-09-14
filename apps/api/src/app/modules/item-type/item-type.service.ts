import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemType } from './entities/item-type.entity';
import { CreateItemTypeDTO, UpdateItemTypeDTO } from './dtos/item-type.dto';

@Injectable()
export class ItemTypeService {
	constructor(@InjectRepository(ItemType) private repository: Repository<ItemType>) { }

	async create(createTypeDTO: CreateItemTypeDTO) {
		const type = this.repository.create(createTypeDTO);
		return await this.repository.save(type);
	}

	async update(id: number, updateTypeDTO: UpdateItemTypeDTO) {
		const type = await this.repository.findOneBy({ id })
		if (!type) throw new NotFoundException()
		const newType = this.repository.merge(type, updateTypeDTO)
		return await this.repository.save(newType);
	}

	async delete(id: number) {
		const type = this.repository.findOneBy({ id })
		if (!type) throw new NotFoundException();
		return await this.repository.delete(id);
	}

	async findOne(id: number) {
		return await this.repository.findOneBy({ id })
	}	

	async findAll() {
		return await this.repository.find();
	}
}
