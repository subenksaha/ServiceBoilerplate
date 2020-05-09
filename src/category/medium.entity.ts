import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MediumCategory {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;
}
