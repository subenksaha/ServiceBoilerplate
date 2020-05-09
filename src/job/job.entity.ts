import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
export class Job {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => User)
    owner: User;

    @Field(() => User)
    student: User;

    /**
     * initially null;
     * on final awarded holds the teacher object
     */
    @Field(() => User, { nullable: true })
    awarded?: User;
}
