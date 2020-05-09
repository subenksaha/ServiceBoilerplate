import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Organization {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;
}
