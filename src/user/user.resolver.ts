import { Resolver, Args, Query } from '@nestjs/graphql';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
    @Query(() => User)
    async user(@Args('id') id: number): Promise<User> {
        const user = new User();
        user.id = id;
        return user;
    }
}
