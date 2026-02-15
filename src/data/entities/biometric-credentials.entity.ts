export class BiometricCredentialsEntity {
    id: number;

    userId: number;

    deviceId: string;

    /**
     * Android Keystore alias or iOS Keychain identifier
     */
    keyAlias: string;

    /**
     * Base64 encoded public key
     */
    publicKey: string;

    biometricType: 'fingerprint' | 'face' | 'iris' | string;

    platform: 'android' | 'ios' | string;
    
    /**
     * evice model, OS version, etc.
     */
    deviceInfo: any;

    /**
     * For replay protection
     */
    counter: number;

    isActive: boolean;

    lastUsedAt: Date;

    createdAt: Date;

    updatedAt: Date;
}