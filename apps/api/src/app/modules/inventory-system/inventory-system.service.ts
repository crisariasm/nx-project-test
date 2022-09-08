import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InventorySystem } from './entities/inventory-system.entity';
import { CreateInventorySystemDTO, UpdateInventorySystemDTO } from './dtos/inventory-system.dto';

@Injectable()
export class InventorySystemService {
	constructor(@InjectRepository(InventorySystem) private repository: Repository<InventorySystem>) { } 

	async create(createInventorySystemDTO: CreateInventorySystemDTO) {
		const inventorySystem = this.repository.create(createInventorySystemDTO);
		return await this.repository.save(inventorySystem);
	}

	async update(id: number, updateInventorySystemDTO: UpdateInventorySystemDTO) {
		const inventorySystem = await this.repository.findOneBy({ id })
		if (!inventorySystem) throw new NotFoundException()
		const newInventotySystem = this.repository.merge(inventorySystem, updateInventorySystemDTO)
		return await this.repository.save(newInventotySystem);
	}

	async delete(id: number) {
		const inventorySystem = this.repository.findOneBy({ id })
		if (!inventorySystem) throw new NotFoundException();
		return await this.repository.delete(id);
	}

	async findOne(id: number) {
		return await this.repository.findOneBy({ id })
	}	

	async findAll() {
		return await this.repository.find();
	}
}
