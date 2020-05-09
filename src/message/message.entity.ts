import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
export class Message {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    text: string;

    @Field(() => User)
    sender: User;

    @Field(() => Date)
    time: Date;
}
