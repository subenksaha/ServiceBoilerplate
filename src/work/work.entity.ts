import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Organization } from '../organization/organization.entity';
import { User } from '../user/user.entity';

@ObjectType()
export class Work {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    position: string;

    @Field(() => String, { nullable: true })
    employeeId: string;

    @Field(() => Date)
    from: Date;

    @Field(() => Date, { nullable: true })
    to: Date;

    @Field(() => Organization)
    organization: Organization;

    @Field(() => User)
    user: User;
}
