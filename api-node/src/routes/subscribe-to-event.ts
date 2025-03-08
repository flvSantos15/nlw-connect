import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

export const subscriberToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribe someone to an event",
        tags: ["subscription"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string().email(),
          }),
        },
      },
    },
    async (req, res) => {
      const { email, name } = req.body;

      return res.status(201).send({
        name,
        email,
      });
    }
  );
};
