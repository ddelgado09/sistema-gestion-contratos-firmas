import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

class Hashing {
	static encryptPassword(input) {
		if (typeof input !== "string") {
			return false;
		}

		const salt = randomBytes(16).toString('hex');
		const hashedPassword = scryptSync(input, salt, 64).toString('hex');

		return `${salt}:${hashedPassword}`;
	}

	static validateHash(input, hash) {
		if (typeof input !== "string" || typeof hash !== "string") {
			return false;
		}

		if (hash.indexOf(':') === -1) {
			return false;
		}

		const [salt, key] = hash.split(':', 2);
		const hashedBuffer = scryptSync(input, salt, 64);

		const keyBuffer = Buffer.from(key, 'hex');
		const match = timingSafeEqual(hashedBuffer, keyBuffer);

		return match;
	}
}