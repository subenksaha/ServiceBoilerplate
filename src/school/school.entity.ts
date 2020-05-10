import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ClassCategory } from '../category/class.entity';
import { Organization } from '../organization/organization.entity';
import { User } from '../user/user.entity';

@ObjectType()
export class School {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    concentration: string;

    @Field(() => String, { nullable: true })
    studentId: string;

    @Field(() => Date)
    from: Date;

    @Field(() => Date, { nullable: true })
    to: Date;

    @Field(() => [ClassCategory])
    classes: ClassCategory[];

    @Field(() => Organization)
    organization: Organization;

    @Field(() => User)
    user: User;
}
