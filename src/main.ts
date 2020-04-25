import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false
  });
  const configService = app.get(ConfigService);
  const winston = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(winston);
  await app.listen(configService.get<number>('PORT'));
  winston.logger.info(`Server started @ ${await app.getUrl()}`)
}
bootstrap();
