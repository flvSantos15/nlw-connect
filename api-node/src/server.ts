import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";

const app = fastify();

// parei no 16:00

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: "http://localhost:3000",
});

app.get("/hello", async () => {
  return { hello: "world" };
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
