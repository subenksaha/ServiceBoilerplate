import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Job } from './job.entity';
import { User } from '../user/user.entity';

@ObjectType()
export class JobApplicant {
    @Field(() => ID)
    id: string;

    @Field(() => Job)
    job: Job;

    @Field(() => User)
    applicant: User;
}
