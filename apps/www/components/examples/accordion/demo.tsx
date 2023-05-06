import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Интерфейс доступный?</AccordionTrigger>
        <AccordionContent>Да.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Интерфейс стилизован</AccordionTrigger>
        <AccordionContent>
          Нет. Еще не успел стилизовать компоненты
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Интерфейс анимирован</AccordionTrigger>
        <AccordionContent>Да. Он анимирован по дефолту</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
