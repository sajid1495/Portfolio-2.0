import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Sajid
          </p>
        </div>
      </div>
    </footer>
  )
}
