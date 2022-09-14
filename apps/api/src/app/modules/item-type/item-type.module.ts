import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeController } from './item-type.controller';
import { ItemTypeService } from './item-type.service';
import { ItemType } from './entities/item-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemType])],
  controllers: [ItemTypeController],
  providers: [ItemTypeService]
})
export class ItemTypeModule {}
