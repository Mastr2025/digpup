import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JournalLoginContent } from "@/components/journal-login-content"

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
  ]
}

export default async function JournalLoginPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <JournalLoginContent id={id} />
      </main>

      <Footer />
    </div>
  )
}
