import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventorySystemModule } from './modules/inventory-system/item.module';
import { config }  from 'dataSource'
import { LocationModule } from './modules/location/item-location.module';
import { TypeModule } from './modules/type/item-type.module';

@Module({
  imports: [ConfigModule, InventorySystemModule, LocationModule, TypeModule,
  TypeOrmModule.forRoot({
    ...config,
    autoLoadEntities: true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}