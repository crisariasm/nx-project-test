import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from '../type/entities/type.entity';
import { CreateTypeDTO, UpdateTypeDTO } from './dtos/type.dto';

@Injectable()
export class TypeService {
	constructor(@InjectRepository(Type) private repository: Repository<Type>) { }

	async create(createTypeDTO: CreateTypeDTO) {
		const type = this.repository.create(createTypeDTO);
		return await this.repository.save(type);
	}

	async update(id: number, updateTypeDTO: UpdateTypeDTO) {
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
