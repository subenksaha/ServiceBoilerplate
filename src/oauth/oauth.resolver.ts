import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthResponse } from '../user/user.dto';

@Resolver()
export class OauthResolver {
    @Query(() => AuthResponse)
    async facebook(@Args() args: string) {
        return;
    }
}
