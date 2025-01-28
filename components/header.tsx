import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-white">
              Your Name
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li>
                <Link href="#gallery" className="hover:text-gray-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

