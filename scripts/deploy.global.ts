import { Routes } from "discord.js";
import { cfg } from "../src/config";
import { getCommandsJson, getRest } from "./helpers";

(async () => {
	try {
        const commands = await getCommandsJson();
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await (await getRest()).put(
			Routes.applicationCommands(cfg.clientId),
			{ body: commands },
		) as Array<any>;

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();