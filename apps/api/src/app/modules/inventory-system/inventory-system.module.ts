import { Module } from '@nestjs/common';
import { InventorySystemService } from './inventory-system.service';
import { InventorySystemController } from './inventory-system.controller';
import { InventorySystem } from './entities/inventory-system.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from '../type/entities/type.entity';
// import { Location } from '../location/entities/location.entity';
@Module({
  imports: [TypeOrmModule.forFeature([InventorySystem, Type])], 
  providers: [InventorySystemService],
  controllers: [InventorySystemController]
})
export class InventorySystemModule {}
