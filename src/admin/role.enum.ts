import { registerEnumType } from '@nestjs/graphql';

export enum RoleEnum {
    SUPER,
    GENERAL,
    VERIFIER,
    MARKETER,
}

registerEnumType(RoleEnum, {
    name: 'RoleEnum',
});
