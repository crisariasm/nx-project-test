import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateInventorySystemDTO, InventorySystemDTO, UpdateInventorySystemDTO } from './dtos/item.dto';
import { InventorySystemService } from './inventory-system.service';

@ApiTags('Inventory System')
@Controller('inventory-system')
export class InventorySystemController {
	constructor(private readonly inventorySystemService: InventorySystemService) { }

	@ApiOkResponse({
		type: InventorySystemDTO,
	})
	@ApiOperation({ summary: 'create inventory system' })
	@Post()
	create(@Body() createInventorySystemDTO: CreateInventorySystemDTO) {
		return this.inventorySystemService.create(createInventorySystemDTO);
	}

	@ApiOkResponse({
		type: InventorySystemDTO,
	})
	@ApiOperation({ summary: 'Update inventory system' })
	@Patch(':id/:typeId')
	update(
		@Param('id') id: number,
		@Param('typeId') typeId: number,
		@Body() updateInventorySystemDTO: UpdateInventorySystemDTO
	) {
		return this.inventorySystemService.update(id, updateInventorySystemDTO, typeId);
	}

	@ApiOkResponse({
		type: InventorySystemDTO
	})
	@ApiOperation({ summary: 'Delete inventory system' })
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.inventorySystemService.delete(id);
	}
	
	@ApiOkResponse({
		type: InventorySystemDTO
	})
	@ApiOperation({ summary: 'Get inventory system by id' })
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.inventorySystemService.findOne(id);
	}

	@ApiOkResponse({
		type: InventorySystemDTO
	})
	@ApiOperation({ summary: 'Get all inventory systems' })
	@Get()
	findAll() {
		return this.inventorySystemService.findAll();
	}
}
