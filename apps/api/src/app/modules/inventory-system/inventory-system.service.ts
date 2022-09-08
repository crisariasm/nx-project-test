import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InventorySystem } from './entities/inventory-system.entity';
import { CreateInventorySystemDTO, UpdateInventorySystemDTO } from './dtos/inventory-system.dto';
// import { Location } from '../location/entities/location.entity';
import { Type } from '../type/entities/type.entity';

@Injectable()
export class InventorySystemService {
	constructor(
		@InjectRepository(InventorySystem) private repository: Repository<InventorySystem>,
		// @InjectRepository(Location) private locationRepository: Repository<Location>,
		@InjectRepository(Type) private typeRepository: Repository<Type>
	) { }

	async create(createInventorySystemDTO: CreateInventorySystemDTO) {
		const inventorySystem = this.repository.create(createInventorySystemDTO);
		return await this.repository.save(inventorySystem);
	}

	async update(id: number, updateInventorySystemDTO: UpdateInventorySystemDTO, typeId: number) {
		const inventorySystem = await this.repository.findOneBy({ id })
		if (!inventorySystem) throw new NotFoundException()
		const type = await this.typeRepository.findOneBy({ id: typeId });
		inventorySystem.type = type;
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

	// async relationLocation(id: number, locationIds: number[]) {
	// 	const inventorySystem = await this.repository.findOneBy({ id })
	// 	if (!inventorySystem) throw new NotFoundException()
	// 	const location = await this.locationRepository.findOneBy({ id: locationIds });
	// 	inventorySystem.locations = location;
	// 	return await this.repository.save(inventorySystem);
	// }
}

