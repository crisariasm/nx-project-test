import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLocationDTO, LocationDTO, UpdateLocationDTO } from './dtos/item-location.dto';
import { LocationService } from './item-location.service';

@ApiTags('Location')
@Controller('location')
export class LocationController {
	constructor(private readonly locationService: LocationService) { }

	@ApiOkResponse({
		type: LocationDTO
	})
	@ApiOperation({ summary: 'create location' })
	@Post()
	create(@Body() createLocationDTO: CreateLocationDTO) {
		return this.locationService.create(createLocationDTO);
	}

	@ApiOkResponse({
		type: LocationDTO
	})
	@ApiOperation({ summary: 'Update location' })
	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateLocationDTO: UpdateLocationDTO
	) {
		return this.locationService.update(id, updateLocationDTO);
	}

	@ApiOkResponse({
		type: LocationDTO
	})
	@ApiOperation({ summary: 'Delete location' })
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.locationService.delete(id);
	}
	
	@ApiOkResponse({
		type: LocationDTO
	})
	@ApiOperation({ summary: 'Get location by id' })
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.locationService.findOne(id);
	}

	@ApiOkResponse({
		type: LocationDTO
	})
	@ApiOperation({ summary: 'Get all locations' })
	@Get()
	findAll() {
		return this.locationService.findAll();
	}
}


