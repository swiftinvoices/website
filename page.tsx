import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Briefcase, HardHat, Zap, DollarSign, PieChart } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold text-blue-600">Swift Invoices</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <Button variant="outline">Log In</Button>
            </li>
            <li>
              <Button>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-50 py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">No BS Invoicing for Small Businesses</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Automated, straightforward, and affordable invoicing solution built for blue collar service workers and
            contractors.
          </p>
          <Button size="lg">Start Your Free Month</Button>
        </section>

        <section id="features" className="py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Swift Invoices?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-blue-500" />}
              title="Simple Setup"
              description="Get started in minutes with our easy-to-use platform."
            />
            <FeatureCard
              icon={<DollarSign className="w-12 h-12 text-blue-500" />}
              title="Affordable"
              description="Fair pricing that won't break the bank for small businesses."
            />
            <FeatureCard
              icon={<PieChart className="w-12 h-12 text-blue-500" />}
              title="Automation"
              description="Save time with automated invoicing and reminders."
            />
          </div>
        </section>

        <section id="pricing" className="bg-gray-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Basic Plan"
              price="$10"
              description="Perfect for small businesses just getting started"
              features={["Core invoicing features", "Unlimited invoices", "Email support"]}
            />
            <PricingCard
              title="Premium Plan"
              price="$20"
              description="For businesses ready to take it to the next level"
              features={["All Basic Plan features", "Custom branding", "Recurring invoices", "Comprehensive analytics"]}
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-lg mb-4">All plans include:</p>
            <p className="text-xl font-semibold">$100 one-time setup fee with 1 month free trial</p>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Who We Serve</h2>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <Briefcase className="w-16 h-16 text-blue-500 mb-4" />
              <p className="text-xl font-semibold">Blue Collar Service Workers</p>
            </div>
            <div className="flex flex-col items-center">
              <HardHat className="w-16 h-16 text-blue-500 mb-4" />
              <p className="text-xl font-semibold">Contractors</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Invoicing?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied small businesses using Swift Invoices.</p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Swift Invoices</h3>
            <p>Simple, automated invoicing for small businesses</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>support@swiftinvoices.com</p>
            <p>1-800-SWIFT-INV</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">{description}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, description, features }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-center mb-4">
          {price}
          <span className="text-lg font-normal">/month</span>
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Choose Plan</Button>
      </CardFooter>
    </Card>
  )
}

