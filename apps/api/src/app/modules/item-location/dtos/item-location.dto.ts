import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ItemLocationDTO {

	@ApiProperty()
	id: number;

	@ApiProperty()
	country: string;

	@ApiProperty()
	State: string;

	@ApiProperty()
	city: string;

	@ApiProperty()
	postalCode: number;
}

export class CreateItemLocationDTO {

	@ApiProperty()
	@IsString()
	country: string;

	@ApiProperty()
	@IsString()
	State: string;

	@ApiProperty()
	@IsString()
	city: string;

	@ApiProperty()
	@IsNumber()
	postalCode: number;
}

export class UpdateItemLocationDTO {

	@ApiProperty()
	@IsNumber()
	id : number;

	@ApiProperty()
	@IsString()
	country: string;

	@ApiProperty()
	@IsString()
	State: string;

	@ApiProperty()
	@IsString()
	city: string;

	@ApiProperty()
	@IsNumber()
	postalCode: number;
}