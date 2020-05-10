import { registerEnumType } from '@nestjs/graphql';

export enum JobType {
    ONSITE,
    VIRTUAL,
}

registerEnumType(JobType, {
    name: 'JobType',
});
