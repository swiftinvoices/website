import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Swift Invoice
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
            </li>
            <li>
              <Button variant="outline">Sign In</Button>
            </li>
            <li>
              <Button>Get Started</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

