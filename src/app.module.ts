import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import SecretConfig from './configs/secret.config';
import WinstonConfig from './configs/winston.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env'
      ],
      load: [SecretConfig, WinstonConfig]
    }),
    WinstonModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('winston'),
      inject: [ConfigService]
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
