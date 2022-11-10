import { Routes } from "discord.js";
import { cfg } from "../src/config";
import { getCommandsJson, getRest } from "./helpers";

if (!cfg.devServerId) {
    console.error(`Development server ID is not set.`);
    process.exit(1);
}

(async () => {
	try {
        const commands = await getCommandsJson();
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await (await getRest()).put(
			Routes.applicationGuildCommands(cfg.clientId, cfg.devServerId!),
			{ body: commands },
		) as Array<any>;

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();