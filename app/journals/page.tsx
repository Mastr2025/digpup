"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const journals = [
  {
    id: 1,
    title: "Journal of Digitodontics",
    issn: "ISSN 2456-7890",
    field: "Digital Dentistry",
    publisher: "dis Scientific",
    impact: "3.45",
    year: "2020",
  },
  {
    id: 2,
    title: "Open Journal of Biomedical Research",
    issn: "ISSN 2456-7891",
    field: "Biomedical Science",
    publisher: "dis Scientific",
    impact: "4.12",
    year: "2019",
  },
  {
    id: 3,
    title: "Journal of Multidisciplinary Engineering",
    issn: "ISSN 2456-7892",
    field: "Engineering",
    publisher: "dis Scientific",
    impact: "2.89",
    year: "2021",
  },
  {
    id: 4,
    title: "International Journal of Maxillofacial Prosthetics",
    issn: "ISSN 2456-7893",
    field: "Medical Science",
    publisher: "dis Scientific",
    impact: "3.78",
    year: "2018",
  },
  {
    id: 5,
    title: "Journal of Advanced Imaging in Digitodontics",
    issn: "ISSN 2456-7894",
    field: "Digital Dentistry",
    publisher: "dis Scientific",
    impact: "3.21",
    year: "2022",
  },
  {
    id: 6,
    title: "Journal of Implantology and Regenerative Dental Medicine",
    issn: "ISSN 2456-7895",
    field: "Dental Medicine",
    publisher: "dis Scientific",
    impact: "3.92",
    year: "2020",
  },
]

export default function JournalsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedField, setSelectedField] = useState("all")
  const [sortBy, setSortBy] = useState("title")

  const filteredJournals = journals
    .filter((journal) => {
      const matchesSearch =
        journal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        journal.issn.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesField = selectedField === "all" || journal.field === selectedField
      return matchesSearch && matchesField
    })
    .sort((a, b) => {
      if (sortBy === "impact") return Number.parseFloat(b.impact) - Number.parseFloat(a.impact)
      if (sortBy === "year") return Number.parseInt(b.year) - Number.parseInt(a.year)
      return a.title.localeCompare(b.title)
    })

  const fields = ["all", ...Array.from(new Set(journals.map((j) => j.field)))]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Browse Journals</h1>
              <p className="text-lg text-muted-foreground">
                Explore our collection of {journals.length} peer-reviewed scientific journals
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-background py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center gap-2">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search journals by title or ISSN..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Select value={selectedField} onValueChange={setSelectedField}>
                  <SelectTrigger className="w-[180px]">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    {fields.slice(1).map((field) => (
                      <SelectItem key={field} value={field}>
                        {field}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Title (A-Z)</SelectItem>
                    <SelectItem value="impact">Impact Factor</SelectItem>
                    <SelectItem value="year">Year (Newest)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Journals Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6 text-sm text-muted-foreground">
              Showing {filteredJournals.length} journal{filteredJournals.length !== 1 ? "s" : ""}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJournals.map((journal) => (
                <Card key={journal.id} className="transition-shadow hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/40">dis</span>
                    </div>
                    <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {journal.field}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-balance">{journal.title}</h3>
                    <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                      <p>{journal.issn}</p>
                      <p>{journal.publisher}</p>
                      <p>Founded: {journal.year}</p>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <div className="text-xs text-muted-foreground">Impact Factor</div>
                        <div className="text-lg font-bold text-primary">{journal.impact}</div>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/journals/${journal.id}`}>View Journal</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJournals.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No journals found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
