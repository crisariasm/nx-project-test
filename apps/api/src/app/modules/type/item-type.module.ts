import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeController } from './item-type.controller';
import { TypeService } from './item-type.service';
import { ItemType } from './entities/item-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemType])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {}
