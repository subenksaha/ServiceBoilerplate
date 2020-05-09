import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
export class Admin {
    @Field(() => ID)
    id: string;

    @Field(() => User)
    user: User;
}
