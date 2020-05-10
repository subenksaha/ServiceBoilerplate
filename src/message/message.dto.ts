import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageNotification {
    type: 'PRIVATE' | 'JOB' | 'CLASS';

    // sender name: user name / job name
    sender: string;
}
