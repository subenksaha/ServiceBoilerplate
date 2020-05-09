import { User } from './user.entity';
import { Message } from '../message/message.entity';
import { Field } from '@nestjs/graphql';

export class UserMessage {
    @Field(() => Message)
    message: Message;

    @Field(() => User)
    receiver: User;
}
