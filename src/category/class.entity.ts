import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ClassCategory {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;
}
