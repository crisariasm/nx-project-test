import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemTypeDTO, ItemTypeDTO, UpdateItemTypeDTO } from './dtos/item-type.dto';
import { ItemTypeService } from './item-type.service';

@ApiTags('Item Type')
@Controller('item-type')
export class ItemTypeController {
	constructor(private readonly typeService: ItemTypeService) { }

	@ApiOkResponse({
		type: ItemTypeDTO
	})
	@ApiOperation({ summary: 'create type' })
	@Post()
	create(@Body() createTypeDTO: CreateItemTypeDTO) {
		return this.typeService.create(createTypeDTO);
	}

	@ApiOkResponse({
		type: ItemTypeDTO
	})
	@ApiOperation({ summary: 'Update type' })
	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateTypeDTO: UpdateItemTypeDTO
	) {
		return this.typeService.update(id, updateTypeDTO);
	}

	@ApiOkResponse({
		type: ItemTypeDTO
	})
	@ApiOperation({ summary: 'Delete type' })
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.typeService.delete(id);
	}
	
	@ApiOkResponse({
		type: ItemTypeDTO
	})
	@ApiOperation({ summary: 'Get type by id' })
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.typeService.findOne(id);
	}

	@ApiOkResponse({
		type: ItemTypeDTO
	})
	@ApiOperation({ summary: 'Get all types' })
	@Get()
	findAll() {
		return this.typeService.findAll();
	}
}
