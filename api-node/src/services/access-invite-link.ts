import { redisClient } from "../redis/client";

interface IAccessInviteLinkParams {
  subscriberId: string;
}

export async function accessInviteLink({
  subscriberId,
}: IAccessInviteLinkParams) {
  await redisClient.hincrby("referral:access-count", subscriberId, 1);
}
