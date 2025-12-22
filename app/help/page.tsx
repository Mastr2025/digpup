import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, FileText, Users, HelpCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Help Center</h1>
              <p className="text-lg text-muted-foreground">Find answers to common questions and access user guides</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold">Author Guides</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <h3 className="font-semibold">Reviewer Guides</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold">Submission Help</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <HelpCircle className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <h3 className="font-semibold">Technical Support</h3>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I submit a manuscript?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        To submit a manuscript, first register for an account if you haven't already. Then, navigate to
                        the journal you wish to submit to, click "Access Journal Portal," and log in as an Author. From
                        your dashboard, you can start a new submission by clicking "Submit New Manuscript" and following
                        the step-by-step process.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>What is the typical review timeline?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        The typical review process takes 4-6 weeks from submission to first decision. After initial
                        review by the editorial team, manuscripts are sent to 2-3 peer reviewers. Authors receive
                        feedback and can revise their manuscripts as needed. The entire process from submission to
                        publication typically takes 3-4 months.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do I become a reviewer?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        To become a reviewer, register on the platform and complete your profile with your areas of
                        expertise, qualifications, and ORCID ID. Editorial teams will invite qualified reviewers based
                        on their expertise. You can also contact the editorial office of specific journals directly to
                        express your interest in reviewing.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>What file formats are accepted for submission?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        We accept manuscripts in Microsoft Word (.doc, .docx), LaTeX, and PDF formats. Figures and
                        images should be submitted separately in high-resolution formats (TIFF, EPS, or JPEG at 300 dpi
                        minimum). Supplementary materials can be uploaded in various formats including video, audio, and
                        data files.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>How can I track my submission status?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        After logging into the journal portal as an Author, you can view all your submissions on your
                        dashboard. Each submission shows its current status (under review, revision requested, accepted,
                        etc.) and any correspondence from editors or reviewers. You'll also receive email notifications
                        when the status changes.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger>What are the publication charges?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Publication charges vary by journal. Many of our journals operate on an open-access model with
                        Article Processing Charges (APCs) that typically range from $500-$2000 USD. Some journals offer
                        waivers or discounts for authors from developing countries. Check the specific journal's website
                        for detailed pricing information.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                      <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        On any journal login page, click the "Send Login Details" link. Enter your registered email
                        address, and we'll send you instructions to reset your password. If you continue to experience
                        issues, contact our technical support team for assistance.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                      <AccordionTrigger>What is ORCID and do I need it?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        ORCID (Open Researcher and Contributor ID) is a unique identifier for researchers. While not
                        mandatory, we strongly recommend obtaining an ORCID ID as it helps distinguish your work from
                        other researchers with similar names and ensures proper attribution of your publications. You
                        can register for free at orcid.org and link it to your dis account.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* User Guides */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Author Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Manuscript Preparation</h4>
                      <p className="leading-relaxed">
                        Learn how to format your manuscript according to journal requirements, including structure,
                        citations, and supplementary materials.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Submission Process</h4>
                      <p className="leading-relaxed">
                        Step-by-step guide to submitting your work, from creating an account to tracking your manuscript
                        through the review process.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Revision and Resubmission</h4>
                      <p className="leading-relaxed">
                        Understanding reviewer feedback and how to effectively revise and resubmit your manuscript.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Reviewer Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Review Process</h4>
                      <p className="leading-relaxed">
                        Understanding your role in peer review, ethical considerations, and confidentiality
                        requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Writing Reviews</h4>
                      <p className="leading-relaxed">
                        Best practices for providing constructive feedback that helps authors improve their work.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Timeline and Expectations</h4>
                      <p className="leading-relaxed">
                        What to expect when you accept a review invitation and how to manage your reviewing commitments.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
