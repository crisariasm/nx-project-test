import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config }  from 'dataSource'
import { ItemModule } from './modules/item/item.module';
import { ItemLocationModule } from './modules/item-location/item-location.module';
import { ItemTypeModule } from './modules/item-type/item-type.module';
import { GatewayModule } from './modules/websocket/gateway.module';


@Module({
  imports: [
  TypeOrmModule.forRoot({
    ...config,
    autoLoadEntities: true
  }),
  ConfigModule, 
  ItemModule, 
  ItemLocationModule, 
  ItemTypeModule, 
  GatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}