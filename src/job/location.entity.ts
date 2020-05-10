import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JobLocation {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => Float)
    latitude: number;

    @Field(() => Float)
    longitude: number;
}
