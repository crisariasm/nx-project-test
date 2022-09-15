import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemType } from '../item-type/entities/item-type.entity';
import { ItemLocation } from '../item-location/entities/item-location.entity';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [SharedModule], 
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
