import Image from "next/image"
import { Header } from "../components/header"

export default function Home() {
  const portfolioItems = [
    { id: 1, title: "Project 1", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, title: "Project 2", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, title: "Project 3", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, title: "Project 4", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, title: "Project 5", image: "/placeholder.svg?height=300&width=400" },
    { id: 6, title: "Project 6", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Your Name</h1>
            <p className="text-xl mb-8 text-gray-300">3D Artist & Blender Enthusiast</p>
            <a
              href="#contact"
              className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
            <div className="max-w-2xl mx-auto text-center text-gray-300">
              <p className="text-lg mb-4">
                I'm a passionate 3D artist specializing in creating stunning visuals using Blender. With [X] years of
                experience, I've worked on a variety of projects ranging from architectural visualization to character
                design.
              </p>
              <p className="text-lg">
                My goal is to bring ideas to life through captivating 3D art. I'm always excited to take on new
                challenges and push the boundaries of what's possible with Blender.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Get in Touch</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded w-full transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-300 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

