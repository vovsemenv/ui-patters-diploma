import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ExamplesNav } from "@/components/examples-nav"
import { CardDemo } from "@/components/examples/card/demo"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { DemoCreateAccount } from "@/app/examples/cards/components/create-account"
import { DemoPaymentMethod } from "@/app/examples/cards/components/payment-method"

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}
export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-5 text-gray-900">
              Создавайте веиколепные сайты вместе с нами!
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
              Библиотека паттернов это бесплатный ресурс который помогает вам
              разрабатывать удобные интерфейсы быстрее
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                href="/docs"
              >
                <span className="justify-center">Узнать больше</span>
              </a>
            </div>
          </div>
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <CardDemo />
          </div>
        </div>

        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-5 text-gray-900">
            Делай быстрее, делай лучше
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
            Ускорь процесс разработки используя наши паттерны
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1 grid-flow-col align-middle">
              <DemoContainer>
                <DemoCreateAccount />
              </DemoContainer>
              <DemoContainer>
                <DemoPaymentMethod />
              </DemoContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
