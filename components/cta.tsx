import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to simplify your invoicing?</span>
          <span className="block">Start using Swift Invoice today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          Join thousands of small businesses who have streamlined their invoicing process with Swift Invoice.
        </p>
        <Button size="lg" variant="secondary" className="mt-8">
          Get Started Now
        </Button>
      </div>
    </div>
  )
}

