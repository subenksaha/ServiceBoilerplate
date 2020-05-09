import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class SubjectCategory {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;
}
