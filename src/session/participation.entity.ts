import { Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { Session } from './session.entity';

export class Participation {
    @Field(() => ID)
    id: string;

    @Field(() => Session)
    session: Session;

    @Field(() => User)
    participant: User;

    @Field(() => Date)
    joined: Date;

    @Field(() => Date)
    left: Date;
}
