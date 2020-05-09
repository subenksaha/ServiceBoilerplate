import { Module } from '@nestjs/common';
import { SchoolResolver } from './school.resolver';

@Module({
    providers: [SchoolResolver],
})
export class SchoolModule {}
