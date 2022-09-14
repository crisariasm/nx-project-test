import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemDTO, ItemDTO, UpdateItemDTO } from './dtos/item.dto';
import { ItemService } from './item.service';

@ApiTags('Item')
@Controller('item')
export class ItemController {
	constructor(private readonly inventorySystemService: ItemService) { }

	@ApiOkResponse({
		type: ItemDTO,
	})
	@ApiOperation({ summary: 'create Item' })
	@Post()
	create(@Body() createItemDTO: CreateItemDTO) {
		return this.inventorySystemService.create(createItemDTO);
	}

	@ApiOkResponse({
		type: ItemDTO,
	})
	@ApiOperation({ summary: 'Update Item' })
	@Patch(':id/:typeId')
	update(
		@Param('id') id: number,
		@Param('itemTypeId') itemTypeId: number,
		@Param('itemLocationIds') itemLocationIds: number,
		@Body() updateItemDTO: UpdateItemDTO
	) {
		return this.inventorySystemService.update(id, updateItemDTO, itemTypeId, itemLocationIds);
	}

	@ApiOkResponse({
		type: ItemDTO
	})
	@ApiOperation({ summary: 'Delete Item' })
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.inventorySystemService.delete(id);
	}
	
	@ApiOkResponse({
		type: ItemDTO
	})
	@ApiOperation({ summary: 'Get Item by id' })
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.inventorySystemService.findOne(id);
	}

	@ApiOkResponse({
		type: ItemDTO
	})
	@ApiOperation({ summary: 'Get all Items' })
	@Get()
	findAll() {
		return this.inventorySystemService.findAll();
	}
}
