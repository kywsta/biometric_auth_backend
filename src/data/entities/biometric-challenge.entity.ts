export class BiometricChallenge {
    id: string;

    userId: string;

    deviceId: string;

    challenge: string;

    nonce: string;

    expiresAt: Date;

    used: boolean;

    createdAt: Date;
}