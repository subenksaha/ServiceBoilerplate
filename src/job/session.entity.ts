import { Field, ObjectType } from '@nestjs/graphql';
import { Session } from '../session/session.entity';
import { Job } from './job.entity';

@ObjectType()
export class JobSession {
    @Field(() => Job)
    job: Job;

    @Field(() => Session)
    session: Session;
}
