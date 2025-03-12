import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { env } from "../env";
import { accessInviteLink } from "../services/access-invite-link";

// Parei em 29:05
export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Acess invite link and redirects user",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (req, res) => {
      const { subscriberId } = req.params;

      await accessInviteLink({ subscriberId });

      const redirectUrl = new URL(env.WEB_URL);

      redirectUrl.searchParams.set("referrer", subscriberId);

      // 301: redirect permanente, o browser mantem o historico, se eu precisar que o usuario venha aqui novamente
      // o navegador nao vai permitir e vai direto para o destino que ele ja guardou

      // 302: redirect temporario, o browser limpa o historico, se eu precisar que o usuario venha aqui novamente
      // o navegador vai permitir e nao vai direto para o destino que ele ja guardou

      return res.redirect(redirectUrl.toString(), 302);
    }
  );
};
