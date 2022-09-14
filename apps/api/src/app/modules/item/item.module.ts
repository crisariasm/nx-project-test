import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemType } from '../item-type/entities/item-type.entity';
import { ItemLocation } from '../item-location/entities/item-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemType, ItemLocation])], 
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
