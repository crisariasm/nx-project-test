import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemLocationController } from './item-location.controller';
import { ItemLocationService } from './item-location.service';
import { ItemLocation } from './entities/item-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemLocation])],
  controllers: [ItemLocationController],
  providers: [ItemLocationService]
})
export class ItemLocationModule {}
