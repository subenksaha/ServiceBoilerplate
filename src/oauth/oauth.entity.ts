import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ProviderEnum } from './provider.enum';
import { User } from '../user/user.entity';

@ObjectType()
export class OAuth {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    identifier: string;

    @Field(() => ProviderEnum)
    provider: ProviderEnum;

    @Field(() => User)
    user: User;

    @Field(() => String)
    accessToken: string;

    @Field(() => String)
    refreshToken: string;
}
