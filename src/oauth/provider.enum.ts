import { registerEnumType } from '@nestjs/graphql';

export enum ProviderEnum {
    FACEBOOK,
    GOOGLE,
}

registerEnumType(ProviderEnum, {
    name: 'ProviderEnum',
});
