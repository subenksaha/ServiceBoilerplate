import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { RoleEnum } from './role.enum';

@ObjectType()
export class Admin {
    @Field(() => ID)
    id: string;

    @Field(() => RoleEnum)
    role: RoleEnum;

    @Field(() => User)
    user: User;
}
