import { Resolver } from '@nestjs/graphql';
import { School } from './school.entity';

@Resolver(() => School)
export class SchoolResolver {}
