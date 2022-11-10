import dt from 'dotenv';
dt.config();

export class Config {
    token: string;
    clientId: string;
    devServerId: string|undefined;

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

    static warnKey(key: string, msg: string): string|undefined {
        let k = this.getKey(key);
        if (!k)
            console.error(`[WARN] Optional key ${key} is not set. ${msg}`);

        return k;
    }

    // NOTE: writing a DSL for this would be funny but unnecessary 
    constructor() {
        this.token = Config.requireKey('TOKEN');
        this.clientId = Config.requireKey('CLIENT_ID');
        this.devServerId = Config.warnKey('DEV_SERVER', 'Command deployment to the development server will be unavailable.');
    }
}

export const cfg = new Config();