import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/component/button";
import { InputRoot, InputIcon, InputField } from "@/component/input";
import { useRouter, useSearchParams } from "next/navigation";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
});

type TSubscriptionFormData = z.infer<typeof subscriptionSchema>;

type TSubscriptionFormProps = TSubscriptionFormData & {
  referer?: string | null;
};

async function subscribeToEvent({
  name,
  email,
  referer,
}: TSubscriptionFormProps) {
  return {
    subscriberId: 1,
  };
}

export function SubscriptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
  });

  async function handleSubscribe({ name, email }: TSubscriptionFormData) {
    const referer = searchParams.get("referer");

    // TODO: Apos criar a api em node
    // Fazer a integracao com o front e gerar a documentacao com o orval
    // Assim essa funcao ficara disponivel
    const { subscriberId } = await subscribeToEvent({ name, email, referer });

    router.push(`/invite/${subscriberId}`);

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>

            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>

          {errors.name && (
            <span className="text-danger text-xs font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>

            <InputField
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>

          {errors.email && (
            <span className="text-danger text-xs font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
