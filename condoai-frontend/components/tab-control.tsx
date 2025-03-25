import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SidebarContent } from '@/components/ui/sidebar'
import { InputChatMessage } from '@/components/input-chat-message'
import { NavMain } from '@/components/nav-main'
import * as React from 'react'

export function TabControl() {
  return (
      <SidebarContent>
        <Tabs defaultValue="activities" className="w-full flex min-h-0 flex-1 flex-col gap-2 ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">

            <CardHeader className="px-0"><Button> Add Activity </Button></CardHeader>

            <CardContent className="border-0 shadow-none px-0 flex h-svh flex-1 flex-col gap-2 overflow-auto">
              {/*Chat goes Here*/}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium ad animi commodi corporis dolores doloribus error
              exercitationem facilis fugiat hic illum inventore ipsam labore
              laborum laudantium modi nihil obcaecati odit, pariatur provident
              quae quasi quibusdam quidem quisquam recusandae reiciendis
              reprehenderit saepe sed similique, sit tempora vel voluptas
              voluptate. Animi consequatur deserunt doloremque quas! Deserunt
              excepturi libero nostrum. Amet animi error esse et nemo numquam
              officia sed voluptate. Ad architecto asperiores aut consectetur
              culpa dolore ea eligendi expedita fuga fugit ipsam ipsum itaque
              laboriosam magnam magni minus molestias mollitia obcaecati quaerat
              quo rerum sequi sint unde, vero voluptas! Accusamus, ad assumenda est
              eveniet ipsa itaque maxime natus nisi pariatur quaerat recusandae
              sequi temporibus. Atque cumque perferendis porro reprehenderit voluptatum.
              Excepturi, exercitationem, repudiandae! Accusamus, accusantium ad aperiam
              aspernatur aut consequatur culpa, cum cumque delectus dicta doloribus
              dolorum ducimus ea eius eligendi enim eos est fuga iusto laboriosam,
              laborum libero magni minus molestias natus nemo neque nostrum quasi
              quisquam quos recusandae sed sequi soluta tenetur ullam ut voluptatum!
              Commodi consequuntur cumque dolor earum impedit ipsam minima natus, non
              nostrum officia officiis placeat possimus quaerat quibusdam quidem quod quos
              recusandae rerum sapiente totam ullam ut velit veniam voluptas voluptatum.
              Molestias mollitia neque nesciunt quod.
            </CardContent>
            <CardFooter className="p-2">
              <InputChatMessage />
            </CardFooter>
          </TabsContent>

          <TabsContent value="chat" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">

              <CardHeader className="px-0"><Button> New Chat </Button></CardHeader>

            <CardContent className="px-0 flex h-svh flex-1 flex-col gap-2 overflow-auto">
              {/*Chat goes Here*/}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium ad animi commodi corporis dolores doloribus error
              exercitationem facilis fugiat hic illum inventore ipsam labore
              laborum laudantium modi nihil obcaecati odit, pariatur provident
              quae quasi quibusdam quidem quisquam recusandae reiciendis
              reprehenderit saepe sed similique, sit tempora vel voluptas
              voluptate. Animi consequatur deserunt doloremque quas! Deserunt
              excepturi libero nostrum. Amet animi error esse et nemo numquam
              officia sed voluptate. Ad architecto asperiores aut consectetur
              culpa dolore ea eligendi expedita fuga fugit ipsam ipsum itaque
              laboriosam magnam magni minus molestias mollitia obcaecati quaerat
              quo rerum sequi sint unde, vero voluptas! Accusamus, ad assumenda est
              eveniet ipsa itaque maxime natus nisi pariatur quaerat recusandae
              sequi temporibus. Atque cumque perferendis porro reprehenderit voluptatum.
              Excepturi, exercitationem, repudiandae! Accusamus, accusantium ad aperiam
              aspernatur aut consequatur culpa, cum cumque delectus dicta doloribus
              dolorum ducimus ea eius eligendi enim eos est fuga iusto laboriosam,
              laborum libero magni minus molestias natus nemo neque nostrum quasi
              quisquam quos recusandae sed sequi soluta tenetur ullam ut voluptatum!
              Commodi consequuntur cumque dolor earum impedit ipsam minima natus, non
              nostrum officia officiis placeat possimus quaerat quibusdam quidem quod quos
              recusandae rerum sapiente totam ullam ut velit veniam voluptas voluptatum.
              Molestias mollitia neque nesciunt quod.
            </CardContent>
            <CardFooter className="p-2">
              <InputChatMessage />
            </CardFooter>
          </TabsContent>
        </Tabs>
      </SidebarContent>



  )
}
