import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsString } from "class-validator";
import { ItemLocationDTO } from "../../item-location/dtos/item-location.dto";
import { ItemTypeDTO } from "../../item-type/dtos/item-type.dto";

export class ItemDTO {
	
	@ApiProperty()
	id : number;

	@ApiProperty()
	code: string;

	@ApiProperty()
	name : string;

	@ApiProperty()
	categoryOfProduct : string;

	@ApiProperty()
	description : string;

	@ApiProperty()
	amount : number;

	@ApiProperty()
	price : number;

	@ApiProperty()
	date: Date;

	//RELATIONS
	@ApiProperty({ type: [ItemLocationDTO] })
	locations: ItemLocationDTO[];

	@ApiProperty({ type: ItemTypeDTO })
	type: ItemTypeDTO;
}

export class CreateItemDTO {

	@ApiProperty()
	@IsString()
	code: string;

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
	amount : number;

	@ApiProperty()
	@IsNumber()
	price : number;

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
	code: string;

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
	amount : number;

	@ApiProperty()
	@IsNumber()
	price : number;

	@ApiProperty()
	@IsDateString()
	date: Date;

	@ApiProperty()
	@IsNumber()
	itemTypeId : number;

	@ApiProperty()
	@IsNumber({},{each: true})
	itemLocationIds : [number];
}