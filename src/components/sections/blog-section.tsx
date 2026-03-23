import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Реконструкция кровли завода «МашСталь» — 22 000 м²",
      description: "Как мы провели полную замену кровельного пирога на действующем производстве без остановки технологического процесса.",
      date: "10 февраля 2026",
      readTime: "Кейс",
    },
    {
      title: "Плоская vs инверсионная кровля: что выбрать для склада?",
      description: "Сравниваем два популярных решения для промышленных объектов: стоимость, долговечность, эксплуатационные расходы.",
      date: "15 января 2026",
      readTime: "Статья",
    },
    {
      title: "Что входит в гарантию на кровельные работы",
      description: "Подробно разбираем, от чего защищает наша 10-летняя гарантия и какие случаи считаются гарантийными.",
      date: "5 декабря 2025",
      readTime: "Статья",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">Кейсы и статьи</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Реальные проекты, экспертные разборы и полезные материалы о промышленном кровельном строительстве.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card">
                <CardHeader>
                  <CardTitle className="tracking-tight">{post.title}</CardTitle>
                  <CardDescription className="opacity-70">
                    {post.date} - {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground opacity-70">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline transition-colors"
                  >
                    Читать далее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}