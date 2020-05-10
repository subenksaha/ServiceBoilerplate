import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ActivityType } from './type.enum';

@ObjectType()
export class Activity {
    @Field(() => ID)
    id: string;

    // action performer eg: user/12345
    @Field(() => String)
    subject: string;

    @Field(() => ActivityType)
    type: ActivityType;

    // action performed on eg: job/12345
    @Field(() => String)
    object: string;

    @Field(() => String)
    time: Date;
}
