import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import SecretConfig from './configs/secret.config';
import WinstonConfig from './configs/winston.config';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';
import { SchoolModule } from './school/school.module';
import { WorkModule } from './work/work.module';
import { EmailModule } from './email/email.module';
import { AdminModule } from './admin/admin.module';
import { CategoryModule } from './category/category.module';
import { JobModule } from './job/job.module';
import { OauthModule } from './oauth/oauth.module';
import { SessionModule } from './session/session.module';
import { MessageModule } from './message/message.module';
import { ActivityModule } from './activity/activity.module';
import { PaymentModule } from './payment/payment.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            load: [SecretConfig, WinstonConfig],
        }),
        WinstonModule.forRootAsync({
            useFactory: (config: ConfigService) => config.get('winston'),
            inject: [ConfigService],
        }),
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            mocks: true,
            autoSchemaFile: true,
        }),
        UserModule,
        OrganizationModule,
        SchoolModule,
        WorkModule,
        EmailModule,
        AdminModule,
        CategoryModule,
        JobModule,
        OauthModule,
        SessionModule,
        MessageModule,
        ActivityModule,
        PaymentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
