"use client"

import { Sparkles } from "lucide-react"

export const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 group hover:shadow-md transition-shadow">
          <Sparkles className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
          Quote Generator
        </h1>
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Discover inspiring quotes on any topic. Enter a subject below to find relevant wisdom and insights from
        history's greatest minds.
      </p>
    </div>
  )
}
