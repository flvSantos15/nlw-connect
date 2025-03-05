import Image from "next/image";

import gold from "@/assets/medal-gold.svg";
import silver from "@/assets/medal-silver.svg";
import cooper from "@/assets/medal-cooper.svg";

// Esse metodo vai ser substituido pela funcao vinda do orval
async function getRanking() {
  const ranking = [
    { id: "1", name: "Flavio Santos", score: 1030 },
    { id: "2", name: "Diego Fernandes", score: 1016 },
    { id: "3", name: "Alexandre Silva", score: 1000 },
  ];

  return {
    ranking,
  };
}

export async function Ranking() {
  const { ranking } = await getRanking();
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicacoes
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1;
          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{" "}
                {item.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image src={gold} alt="" className="absolute top-0 right-8" />
              )}

              {rankingPosition === 2 && (
                <Image src={silver} alt="" className="absolute top-0 right-8" />
              )}

              {rankingPosition === 3 && (
                <Image src={cooper} alt="" className="absolute top-0 right-8" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
