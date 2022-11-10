import dt from 'dotenv';
dt.config();

export class Config {
    token: string;

    static getKey(key: string): string|undefined {
        return process.env[key];
    }

    static requireKey(key: string): string {
        let k = this.getKey(key);
        if (!k) {
            console.error(`Required environment variable ${key} is not set`);
            process.exit(1);
        }

        return k;
    }

    constructor() {
        this.token = Config.requireKey('TOKEN');
    }
}

export const cfg = new Config();