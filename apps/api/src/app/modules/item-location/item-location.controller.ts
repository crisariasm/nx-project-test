import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateItemLocationDTO, ItemLocationDTO, UpdateItemLocationDTO } from './dtos/item-location.dto';
import { ItemLocationService } from './item-location.service';

@ApiTags('Item Location')
@Controller('item-location')
export class ItemLocationController {
	constructor(private readonly locationService: ItemLocationService) { }

	@ApiOkResponse({
		type: ItemLocationDTO
	})
	@ApiOperation({ summary: 'create location' })
	@Post()
	create(@Body() createLocationDTO: CreateItemLocationDTO) {
		return this.locationService.create(createLocationDTO);
	}

	@ApiOkResponse({
		type: ItemLocationDTO
	})
	@ApiOperation({ summary: 'Update location' })
	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateLocationDTO: UpdateItemLocationDTO
	) {
		return this.locationService.update(id, updateLocationDTO);
	}

	@ApiOkResponse({
		type: ItemLocationDTO
	})
	@ApiOperation({ summary: 'Delete location' })
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.locationService.delete(id);
	}
	
	@ApiOkResponse({
		type: ItemLocationDTO
	})
	@ApiOperation({ summary: 'Get location by id' })
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.locationService.findOne(id);
	}

	@ApiOkResponse({
		type: ItemLocationDTO
	})
	@ApiOperation({ summary: 'Get all locations' })
	@Get()
	findAll() {
		return this.locationService.findAll();
	}
}


