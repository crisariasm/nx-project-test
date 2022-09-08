import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../location/entities/location.entity';
import { CreateLocationDTO, UpdateLocationDTO } from './dtos/location.dto';

@Injectable()
export class LocationService {
	constructor(@InjectRepository(Location) private repository: Repository<Location>) { }

	async create(createLocationDTO: CreateLocationDTO) {
		const location = this.repository.create(createLocationDTO);
		return await this.repository.save(location);
	}

	async update(id: number, updateLocationDTO: UpdateLocationDTO) {
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
