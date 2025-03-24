import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'

export function InputChatMessage() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input id="chat-input-message" placeholder="Enter your message" />
      <Button type="submit"><Send /></Button>
    </div>
  )
}
