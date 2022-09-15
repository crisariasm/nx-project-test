import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemLocation } from '../modules/item-location/entities/item-location.entity';
import { ItemType } from '../modules/item-type/entities/item-type.entity';
import { Item } from '../modules/item/entities/item.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Item,
			ItemLocation,
			ItemType
		]),
	],
	exports: [
		TypeOrmModule
	]
})
export class SharedModule {}