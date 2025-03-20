import { cn } from "@/lib/utils"
import { Button } from "@/components/shadcn/ui/button"
import { Input } from "@/components/shadcn/ui/input"
import { Label } from "@/components/shadcn/ui/label"

export default function LoginRecoveryForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold uppercase">RECUPERAR ACESSO</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Digite o e-mail que está tentando recuperar
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="email@exemplo.com" required />
        </div>
        
        <Button type="submit" className="w-full">
          Enviar e-mail de recuperação
        </Button>
        <Button type="button"  variant="outline" className="w-full">
          Entrar com uma conta
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Outros problemas?
          </span>
        </div>
        <div className="text-center text-sm">
          Não lembra o email? { " " }
          <a href="#" className="underline underline-offset-4">
          Abrir um chamado no RH.
        </a>
      </div>
      </div>
      
    </form>
  )
}
