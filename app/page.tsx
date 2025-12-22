import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, FileText, TrendingUp, Search, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                Scientific Excellence
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-balance">
                Advancing Scholarly Communication Through Digital Innovation
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
                Discover a comprehensive platform for academic publishing, connecting researchers, editors, and
                institutions worldwide with cutting-edge digital solutions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/journals">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Journals
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/30 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Active Journals</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-secondary">15,000+</div>
                <div className="text-sm text-muted-foreground">Published Articles</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Researchers</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-secondary">120+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Comprehensive digital publishing solutions designed to empower journals, editors, and researchers
                worldwide
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">e-Journal Platform</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete solution for journal creation, hosting, and management with advanced digital tools
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Submit Manager</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Intuitive manuscript submission platform streamlining the entire review process
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Editorial & Review</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    End-to-end editorial and peer review systems for efficient scholarly communication
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Search className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">CrossRef Integration</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    DOI, Crossmark, and Similarity Check services for publication integrity
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Citation Metrics</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive citation tracking and impact factor calculation services
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Archiving Solutions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Long-term preservation through Portico and CLOCKSS archiving services
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Journals */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold md:text-4xl">Featured Journals</h2>
                <p className="text-muted-foreground">Recently added to our platform</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/journals">View All</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Journal of Digitodontics",
                  issn: "ISSN 2456-7890",
                  field: "Digital Dentistry",
                  impact: "3.45",
                },
                {
                  title: "Open Journal of Biomedical Research",
                  issn: "ISSN 2456-7891",
                  field: "Biomedical Science",
                  impact: "4.12",
                },
                {
                  title: "Journal of Multidisciplinary Engineering",
                  issn: "ISSN 2456-7892",
                  field: "Engineering",
                  impact: "2.89",
                },
              ].map((journal, idx) => (
                <Card key={idx} className="transition-shadow hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <h3 className="mb-2 font-semibold text-balance">{journal.title}</h3>
                    <p className="mb-1 text-sm text-muted-foreground">{journal.issn}</p>
                    <p className="mb-3 text-sm text-muted-foreground">{journal.field}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Impact Factor: {journal.impact}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/journals/${idx + 1}`}>View</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Publish Your Research?</h2>
              <p className="mb-8 text-lg opacity-90 leading-relaxed">
                Join thousands of researchers worldwide and bring your work to the global academic community
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent hover:bg-primary-foreground/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
