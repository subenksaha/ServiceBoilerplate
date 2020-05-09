import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Organization } from '../organization/organization.entity';
import { User } from '../user/user.entity';
import { ClassCategory } from '../category/class.entity';

@ObjectType()
export class School {
    @Field(() => ID)
    id: string;

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
