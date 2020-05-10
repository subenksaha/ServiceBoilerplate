import { registerEnumType } from '@nestjs/graphql';

export enum GenderEnum {
    MALE,
    FEMALE,
}

registerEnumType(GenderEnum, {
    name: 'GenderEnum',
});
