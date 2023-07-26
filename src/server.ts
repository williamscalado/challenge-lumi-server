import { ServerConfig } from ".";

ServerConfig.app.listen(ServerConfig.port, () => {
  console.log(`[SERVER]: running in port ${ServerConfig.port}`);
});
