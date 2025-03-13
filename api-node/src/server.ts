import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env";
import { accessInviteLinkRoute } from "./routes/access-event-link-route";
import { getSubcriberInviteClicksRoute } from "./routes/get-subscriber-invite-click-route";
import { subscriberToEventRoute } from "./routes/subscribe-to-event-route";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: "http://localhost:3000",
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NWL Connect",
      version: "0.0.1",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(subscriberToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubcriberInviteClicksRoute);

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
