import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { JobLocation } from './location.entity';
import { JobType } from './type.enum';

@ObjectType()
export class Job {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => JobType)
    type: JobType;

    @Field(() => JobLocation, { nullable: true })
    location?: JobLocation;

    @Field(() => String)
    schedule: string;

    @Field(() => User)
    owner: User;

    @Field(() => User)
    student: User;

    /**
     * initially null;
     * on final awarded holds the teacher object
     */
    @Field(() => User, { nullable: true })
    awarded?: User;
}
