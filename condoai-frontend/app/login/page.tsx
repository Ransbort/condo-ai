import { LoginForm } from "@/components/login-form"
import Logo from '@/components/ui/logo'

export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-bold text-lg">
          <div className="flex items-center justify-center rounded-md text-primary-foreground">
            <Logo />
          </div>

        </a>
        <LoginForm />
      </div>
    </div>
  )
}