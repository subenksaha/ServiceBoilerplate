import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Email } from '../email/email.entity';
import { School } from '../school/school.entity';
import { Work } from '../work/work.entity';
import { GenderEnum } from './gender.enum';

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    password: string;

    @Field(() => GenderEnum)
    gender: GenderEnum;

    @Field(() => Date)
    birthday: Date;

    @Field(() => Email)
    email: Email;

    @Field(() => [School], { nullable: true })
    schools?: School[];

    @Field(() => [Work], { nullable: true })
    works: Work[];
}
