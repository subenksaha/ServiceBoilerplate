import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
export class Email {
    @Field(() => ID)
    id: string;

    /**
     * save as reverse FQDN for natural order
     * ex: admin@example.com --> com.example@admin
     */
    @Field(() => String)
    address: string; //

    /**
     * Auto generate verification code
     * and save encrypted string like password
     * @null means verified
     */
    verification: string;

    @Field(() => User)
    user: User;
}
