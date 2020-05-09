import { Field, ID, ObjectType } from '@nestjs/graphql';
import { School } from '../school/school.entity';
import { Work } from '../work/work.entity';

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    password: string;

    @Field(() => [School], { nullable: true })
    schools?: School[];

    @Field(() => [Work], { nullable: true })
    works: Work[];
}
