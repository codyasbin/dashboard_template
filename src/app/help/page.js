import {
  PageContainer,
  PageHeader,
} from "@/components/dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  Book, 
  FileQuestion, 
  Mail,
  ExternalLink,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Help & Support",
}

const helpTopics = [
  {
    title: "Getting Started",
    description: "Learn the basics of using the dashboard",
    icon: Book,
    articles: 12,
  },
  {
    title: "Account & Billing",
    description: "Manage your account and subscription",
    icon: FileQuestion,
    articles: 8,
  },
  {
    title: "Integrations",
    description: "Connect with third-party services",
    icon: ExternalLink,
    articles: 15,
  },
  {
    title: "Troubleshooting",
    description: "Solve common issues and errors",
    icon: MessageCircle,
    articles: 24,
  },
]

const popularArticles = [
  "How to export your data",
  "Understanding analytics metrics",
  "Setting up team permissions",
  "Customizing your dashboard",
  "API documentation",
]

export default function HelpPage() {
  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Help & Support"
        description="Find answers to your questions and get help."
      />

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for help articles..."
            className="w-full pl-10 h-12 text-base"
          />
        </div>
      </div>

      {/* Help Topics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {helpTopics.map((topic) => (
          <Card key={topic.title} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">{topic.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {topic.articles} articles
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Popular Articles & Contact */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
            <CardDescription>Most read help articles</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {popularArticles.map((article, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Book className="h-4 w-4 text-muted-foreground" />
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Can&apos;t find what you&apos;re looking for?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our support team is available Monday to Friday, 9am to 6pm EST.
              Average response time is under 2 hours.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Start Live Chat
              </Button>
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
