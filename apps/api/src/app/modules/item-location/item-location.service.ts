import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemLocation } from './entities/item-location.entity';
import { CreateItemLocationDTO, UpdateItemLocationDTO } from './dtos/item-location.dto';

@Injectable()
export class ItemLocationService {
	constructor(@InjectRepository(ItemLocation) private repository: Repository<ItemLocation>) { }

	async create(createLocationDTO: CreateItemLocationDTO) {
		const location = this.repository.create(createLocationDTO);
		return await this.repository.save(location);
	}

	async update(id: number, updateLocationDTO: UpdateItemLocationDTO) {
		const location = await this.repository.findOneBy({ id })
		if (!location) throw new NotFoundException()
		const newLocation = this.repository.merge(location, updateLocationDTO)
		return await this.repository.save(newLocation);
	}

	async delete(id: number) {
		const location = this.repository.findOneBy({ id })
		if (!location) throw new NotFoundException();
		return await this.repository.delete(id);
	}

	async findOne(id: number) {
		return await this.repository.findOneBy({ id })
	}	

	async findAll() {
		return await this.repository.find();
	}
}
