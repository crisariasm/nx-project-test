import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsString } from "class-validator";
import { LocationDTO } from "../../location/dtos/item-location.dto";
import { TypeDTO } from "../../type/dtos/item-type.dto";


export class ItemDTO {
	
	@ApiProperty()
	id : number;

	@ApiProperty()
	codigo: string;

	@ApiProperty()
	name : string;

	@ApiProperty()
	categoryOfProduct : string;

	@ApiProperty()
	description : string;

	@ApiProperty()
	cantidad : number;

	@ApiProperty()
	valor : number;

	@ApiProperty()
	date: Date;

	//RELATIONS
	@ApiProperty({ type: [LocationDTO] })
	locations: LocationDTO[];

	@ApiProperty({ type: TypeDTO })
	type: TypeDTO;
}

export class CreateItemDTO {

	@ApiProperty()
	@IsString()
	codigo: string;

	@ApiProperty()
	@IsString()
	name : string;

	@ApiProperty()
	@IsString()
	categoryOfProduct : string;

	@ApiProperty()
	@IsString()
	description : string;

	@ApiProperty()
	@IsNumber()
	cantidad : number;

	@ApiProperty()
	@IsNumber()
	valor : number;

	@ApiProperty()
	@IsDateString()
	date: Date;
}

export class UpdateItemDTO {

	@ApiProperty()
	@IsNumber()
	id : number;

	@ApiProperty()
	@IsString()
	codigo: string;

	@ApiProperty()
	@IsString()
	name : string;

	@ApiProperty()
	@IsString()
	categoryOfProduct : string;

	@ApiProperty()
	@IsString()
	description : string;

	@ApiProperty()
	@IsNumber()
	cantidad : number;

	@ApiProperty()
	@IsNumber()
	valor : number;

	@ApiProperty()
	@IsDateString()
	date: Date;

	@ApiProperty()
	@IsNumber()
	itemTypeId : number;

	@ApiProperty()
	itemLocationIds : [number];
}