import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config }  from 'dataSource'
import { ItemModule } from './modules/item/item.module';
import { ItemLocationModule } from './modules/item-location/item-location.module';
import { ItemTypeModule } from './modules/item-type/item-type.module';


@Module({
  imports: [ConfigModule, ItemModule, ItemLocationModule, ItemTypeModule,
  TypeOrmModule.forRoot({
    ...config,
    autoLoadEntities: true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}