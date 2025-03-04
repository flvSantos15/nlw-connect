import { Button } from "@/component/button"
import { IconButton } from "@/component/icon-button"
import { ArrowRight, Copy } from "lucide-react"

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
    </main>
  )
}
