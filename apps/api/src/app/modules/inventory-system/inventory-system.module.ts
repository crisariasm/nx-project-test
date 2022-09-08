import { Module } from '@nestjs/common';
import { InventorySystemService } from './inventory-system.service';
import { InventorySystemController } from './inventory-system.controller';
import { InventorySystem } from './entities/inventory-system.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InventorySystem])],
  providers: [InventorySystemService],
  controllers: [InventorySystemController]
})
export class InventorySystemModule {}
