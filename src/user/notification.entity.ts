import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Activity } from '../activity/activity.entity';

@ObjectType()
export class UserNotification {
    @Field(() => ID)
    id: string;

    @Field(() => User)
    receiver: User;

    @Field(() => Activity)
    action: Activity;

    @Field(() => Date)
    seen: Date;
}
