import { inArray } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redisClient } from "../redis/client";

export async function getRanking() {
  const ranking = await redisClient.zrevrange(
    "referral:ranking",
    0,
    2,
    "WITHSCORES"
  );
  const subscriberIdAndScore: Record<string, number> = {};

  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1]);
  }

  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(inArray(subscriptions.id, Object.keys(subscriberIdAndScore)));

  const rankingWithScore = subscribers
    .map((subscriber) => {
      return {
        id: subscriber.id,
        name: subscriber.name,
        score: subscriberIdAndScore[subscriber.id],
      };
    })
    .sort((a, b) => b.score - a.score); // para ordenar de maior para menor

  return { rankingWithScore };
}
