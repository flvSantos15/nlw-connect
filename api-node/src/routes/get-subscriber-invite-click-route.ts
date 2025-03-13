import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberInviteClicks } from "../services/get-subscriber-invite-clicks";

// Parei no 08:30

export const getSubcriberInviteClicksRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber ranking invite clicks count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (req) => {
      const { subscriberId } = req.params;

      const { count } = await getSubscriberInviteClicks({ subscriberId });

      return { count };
    }
  );
};
