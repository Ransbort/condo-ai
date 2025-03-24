import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuLabel } from '@/components/ui/sidebar'
import { InputChatMessage } from '@/components/input-chat-message'

export function TabControl() {
  return (
      <SidebarContent>
        <Tabs defaultValue="activities" className="w-full flex min-h-0 flex-1 flex-col gap-2 ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">

            <CardHeader className="px-0"><Button> New Activity </Button></CardHeader>

            <CardContent className="border-0 shadow-none px-0 flex h-svh flex-1 flex-col gap-2 overflow-auto">
              <span>This is where user activities are rendered</span>
            </CardContent>
            <CardFooter className="px-0">
              <InputChatMessage />
            </CardFooter>
          </TabsContent>

          <TabsContent value="chat" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">

              <CardHeader className="px-0"><Button> New Chat </Button></CardHeader>

            <CardContent className="border-0 shadow-none px-0 flex h-svh flex-1 flex-col gap-2 overflow-auto">
              {/*Chat goes Here*/}
              <span>
                   odit rem! Facilis obcaecati pariatur perferendis qui quo tempora unde? Adipisci aliquam commodi expedita iure, modi mollitia nam officia saepe soluta tempore, tenetur vel voluptas?
              </span>
            </CardContent>
            <CardFooter className="px-0 pt-2">
              <InputChatMessage />
            </CardFooter>
          </TabsContent>
        </Tabs>
      </SidebarContent>



  )
}
