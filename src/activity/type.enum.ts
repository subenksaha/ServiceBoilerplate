import { registerEnumType } from '@nestjs/graphql';

export enum ActivityType {
    CREATE,
    READ,
    UPDATE,
    DELETE,
}

registerEnumType(ActivityType, {
    name: 'ActivityType',
});
