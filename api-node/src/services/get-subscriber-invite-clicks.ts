import { redisClient } from "../redis/client";

interface IGetSubscriberInviteClicksParams {
  subscriberId: string;
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: IGetSubscriberInviteClicksParams) {
  // await redisClient.hincrby("referral:access-count", subscriberId, 1);

  const count = await redisClient.hget("referral:access-count", subscriberId);

  return { count: count ? Number.parseInt(count) : 0 };
}
