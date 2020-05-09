import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Session {
    @Field(() => ID)
    id: string;

    @Field(() => Date)
    started: Date;

    @Field(() => Date)
    ended: Date;
}
