import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { subscribeToEvent } from "../services/subscribe-to-event";

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
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (req, res) => {
      const { email, name } = req.body;

      const { subscriberId } = await subscribeToEvent({
        name,
        email,
      });

      return res.status(201).send({
        subscriberId,
      });
    }
  );
};
