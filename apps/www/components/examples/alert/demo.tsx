import { Terminal, Waves } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Внимание!</AlertTitle>
      <AlertDescription>Вы можете добавить описание к алерту.</AlertDescription>
    </Alert>
  )
}
