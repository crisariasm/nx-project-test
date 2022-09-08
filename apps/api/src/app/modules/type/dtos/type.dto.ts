import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class TypeDTO {

	@ApiProperty()
	id: number;

	@ApiProperty()
	initial: boolean;

	@ApiProperty()
	final: boolean;

	@ApiProperty()
	annual: boolean;

	@ApiProperty()
	journal: boolean;

	@ApiProperty()
	rawMaterial: boolean;

	@ApiProperty()
	product: boolean;

	@ApiProperty()
	stock: boolean;
}

export class CreateTypeDTO {

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	initial: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	final: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	annual: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	journal: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	rawMaterial: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	product: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	stock: boolean;
}

export class UpdateTypeDTO {

	@ApiProperty()
	@IsNumber()
	typeId : number;
	
	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	initial: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	final: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	annual: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	journal: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	rawMaterial: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	product: boolean;

	@ApiProperty()
	@IsBoolean()
	@IsOptional()
	stock: boolean;
}