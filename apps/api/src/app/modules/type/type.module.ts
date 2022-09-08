import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { ItemType } from './entities/item-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemType])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {}
