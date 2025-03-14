import { redisClient } from "../redis/client";

interface GetSubscriberInviteCountParams {
  subscriberId: string;
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: GetSubscriberInviteCountParams) {
  const count = await redisClient.zscore("referral:ranking", subscriberId);

  return { count: count ? Number.parseInt(count) : 0 };
}
