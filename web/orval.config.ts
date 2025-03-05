import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:3333/docs/json", // o endereco da documentacao da api
    output: {
      target: "./src/http/api.ts", // onde quero salvar o arquivo
      client: "fetch",
      httpClient: "fetch", // o client http que quero usar
      clean: true, // toda vez que rodo ele limpa o anterior
      baseUrl: "http://localhost:3333", // url backend
      override: {
        fetch: {
          includeHttpResponseReturnType: true,
        },
      },
    },
  },
});
