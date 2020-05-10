import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { GenderEnum } from './gender.enum';
import { User } from './user.entity';

@ArgsType()
export class SignupArgs {
    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => GenderEnum)
    gender: string;

    @Field(() => String)
    birthday: string;
}

@ArgsType()
export class LoginArgs {
    @Field(() => String)
    username: string;

    @Field(() => String)
    password: string;
}

@ObjectType()
export class Me extends User {
    @Field(() => Int)
    messageCount: number;

    @Field(() => Int)
    notificationCount: number;
}

@ObjectType()
export class AuthResponse {
    @Field(() => String)
    accessToken: string;

    @Field(() => Me)
    user: Me;
}
