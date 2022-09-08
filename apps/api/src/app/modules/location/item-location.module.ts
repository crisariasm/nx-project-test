import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './item-location.controller';
import { LocationService } from './item-location.service';
import { ItemLocation } from './entities/item-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemLocation])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
