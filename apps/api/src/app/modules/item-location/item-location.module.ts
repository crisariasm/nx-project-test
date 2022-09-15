import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemLocationController } from './item-location.controller';
import { ItemLocationService } from './item-location.service';
import { ItemLocation } from './entities/item-location.entity';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ItemLocationController],
  providers: [ItemLocationService]
})
export class ItemLocationModule {}
