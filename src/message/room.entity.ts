import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MessageRoom {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    name: string;
}
