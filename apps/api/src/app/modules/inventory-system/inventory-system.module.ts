import { Module } from '@nestjs/common';
import { InventorySystemService } from './inventory-system.service';
import { InventorySystemController } from './inventory-system.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemType } from '../type/entities/item-type.entity';
// import { Location } from '../location/entities/location.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemType])], 
  providers: [InventorySystemService],
  controllers: [InventorySystemController]
})
export class InventorySystemModule {}
