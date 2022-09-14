import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDTO, UpdateItemDTO } from './dtos/item.dto';
import { ItemType } from '../item-type/entities/item-type.entity';
import { ItemLocation } from '../item-location/entities/item-location.entity';

// import { ItemLocation } from '../location/entities/item-location.entity';

@Injectable()
export class ItemService {
	constructor(
		@InjectRepository(Item) private repository: Repository<Item>,
		@InjectRepository(ItemLocation) private itemLocationRepository: Repository<ItemLocation>,
		@InjectRepository(ItemType) private typeRepository: Repository<ItemType>
	) { }

	async create(createInventorySystemDTO: CreateItemDTO) {
		const inventorySystem = this.repository.create(createInventorySystemDTO);
		return await this.repository.save(inventorySystem);
	}

	async update(id: number, updateInventorySystemDTO: UpdateItemDTO, itemTypeId: number, itemLocationIds: number) {
		const inventorySystem = await this.repository.findOneBy({ id })
		if (!inventorySystem) throw new NotFoundException()
		const itemType = await this.typeRepository.findOneBy({ id: itemTypeId });
		inventorySystem.itemType = itemType;
		const ItemLocations = await this.itemLocationRepository.find({ [id]: itemLocationIds });
		inventorySystem.itemLocations = ItemLocations;
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