import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthResponse, LoginArgs, SignupArgs } from './user.dto';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
    @Query(() => User)
    async user(@Args('id') id: number): Promise<User> {
        return;
    }

    @Query(() => AuthResponse)
    async login(@Args() args: LoginArgs) {
        console.log(args);
        return;
    }

    @Mutation(() => String)
    async signup(@Args() args: SignupArgs) {
        console.log(args);
        return; // respond with userId: string
    }
}
