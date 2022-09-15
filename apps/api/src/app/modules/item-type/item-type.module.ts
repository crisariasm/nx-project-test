import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeController } from './item-type.controller';
import { ItemTypeService } from './item-type.service';
import { ItemType } from './entities/item-type.entity';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ItemTypeController],
  providers: [ItemTypeService]
})
export class ItemTypeModule {}
