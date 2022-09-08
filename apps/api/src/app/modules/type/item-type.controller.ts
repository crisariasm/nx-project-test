import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTypeDTO, TypeDTO, UpdateTypeDTO } from './dtos/item-type.dto';
import { TypeService } from './item-type.service';

@ApiTags('Type')
@Controller('type')
export class TypeController {
	constructor(private readonly typeService: TypeService) { }

	@ApiOkResponse({
		type: TypeDTO
	})
	@ApiOperation({ summary: 'create type' })
	@Post()
	create(@Body() createTypeDTO: CreateTypeDTO) {
		return this.typeService.create(createTypeDTO);
	}

	@ApiOkResponse({
		type: TypeDTO
	})
	@ApiOperation({ summary: 'Update type' })
	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateTypeDTO: UpdateTypeDTO
	) {
		return this.typeService.update(id, updateTypeDTO);
	}

	@ApiOkResponse({
		type: TypeDTO
	})
	@ApiOperation({ summary: 'Delete type' })
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.typeService.delete(id);
	}
	
	@ApiOkResponse({
		type: TypeDTO
	})
	@ApiOperation({ summary: 'Get type by id' })
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.typeService.findOne(id);
	}

	@ApiOkResponse({
		type: TypeDTO
	})
	@ApiOperation({ summary: 'Get all types' })
	@Get()
	findAll() {
		return this.typeService.findAll();
	}
}
