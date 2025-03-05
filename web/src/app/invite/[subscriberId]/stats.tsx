import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

interface IStatsProps {
  subscriberId: string;
}

async function getSubscriberInviteClicks(subscriberId: string) {
  // Essa funcao vai substituida pela funcao vinda do orval
  return { count: 142 };
}
async function getSubscriberInviteCount(subscriberId: string) {
  // Essa funcao vai substituida pela funcao vinda do orval
  return { count: 142 };
}
async function getSubscriberRankingPosition(subscriberId: string) {
  // Essa funcao vai substituida pela funcao vinda do orval
  return { position: 1 };
}

export async function Stats({ subscriberId }: IStatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId);
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);
  const { position: rankingPositin } = await getSubscriberRankingPosition(
    subscriberId
  );

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Incricoes feitas
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPositin ? `${rankingPositin}º` : "-"}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posicao no ranking
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
