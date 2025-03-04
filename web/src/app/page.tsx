import { Button } from "@/component/button"
import { IconButton } from "@/component/icon-button"
import { InputField, InputIcon, InputRoot } from "@/component/input"
import { ArrowRight, Copy, Mail } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5 " />
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  )
}
