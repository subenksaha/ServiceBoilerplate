import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';
import winstonConfig from './configs/winston.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig())
  });
  const configService = app.get(ConfigService);
  const winston = app.get(WINSTON_MODULE_NEST_PROVIDER);
  await app.listen(configService.get<number>('PORT'));
  winston.logger.info(`Server started @ ${await app.getUrl()}`)
}
bootstrap();
