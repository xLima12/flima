/* eslint-disable no-undef */
const spawn = require("node:child_process");

function stopServicesDocker() {
  exec("npm run services:stop", handleReturn);

  function handleReturn(error, stdout) {
    if (error) {
      console.log(`Erro ao executar o script: ${error}`);
      return;
    }
    console.log(stdout);
  }
}

const server = spawn("npm", ["run", "dev-server"], { stdio: "inherit" });

process.on("SIGINT", () => {
  console.log("\n\n🔴 Encerrando o servidor e parando os serviços...");

  stopServicesDocker();

  setTimeout(() => {
    server.kill("SIGINT");
    process.exit();
  }, 1000);
});
