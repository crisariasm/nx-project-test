import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './modules/item/item.module';
import { ItemLocationModule } from './modules/item-location/item-location.module';
import { ItemTypeModule } from './modules/item-type/item-type.module';
import { DataSource } from 'typeorm';
import { defaultConnection } from '../../../../pg.config'
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [ConfigModule, 
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: defaultConnection,
    inject: [ConfigService],
  }), 
  ItemModule, 
  ItemLocationModule, 
  ItemTypeModule, 
  SharedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }