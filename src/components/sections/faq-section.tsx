import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "С какими объектами вы работаете?",
      answer:
        "Мы специализируемся на промышленных кровлях большого объёма: заводы, производственные цеха, склады, логистические центры, торговые комплексы. Минимальный объём — от 1 000 м². За 30 лет работы реализовали более 500 объектов по всей России.",
    },
    {
      question: "Как рассчитывается стоимость работ?",
      answer:
        "Стоимость зависит от площади, типа кровельной системы, состояния несущих конструкций и условий объекта. Наш специалист выезжает на замер бесплатно, после чего в течение 3 рабочих дней готовим детальную смету.",
    },
    {
      question: "Какую гарантию вы даёте?",
      answer:
        "На все виды монтажных работ даём письменную гарантию 10 лет. На ремонтные работы — 3 года. Гарантия фиксируется в договоре и охватывает как материалы, так и качество выполнения.",
    },
    {
      question: "Есть ли у вас допуск СРО?",
      answer:
        "Да, компания «Вира» является членом саморегулируемой организации и имеет все необходимые допуски для выполнения кровельных работ на промышленных объектах. Все документы предоставляем по запросу.",
    },
    {
      question: "Как долго выполняется монтаж?",
      answer:
        "Сроки зависят от площади и сложности объекта. Стандартный объект 5 000 м² — около 4–6 недель. Точные сроки прописываем в договоре и несём за них ответственность. За 30 лет не было ни одного срыва плановой даты сдачи.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Ответы на самые популярные вопросы о нашей работе и условиях сотрудничества.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}