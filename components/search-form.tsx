"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import { LoadingDots } from "@/components/ui/loading-dots"

interface SearchFormProps {
  onSearch: (topic: string) => void
  isLoading: boolean
  onReset: () => void
}

export const SearchForm = ({ onSearch, isLoading, onReset }: SearchFormProps) => {
  const [topic, setTopic] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim() || isLoading) return
    onSearch(topic)
  }

  const handleReset = () => {
    setTopic("")
    onReset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3 max-w-lg mx-auto">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors group-focus-within:text-gray-600" />
          <Input
            type="text"
            placeholder="Enter a topic (e.g., motivation, success, life)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isLoading}
            className="pl-10 h-12 bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-300 transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-md"
          />
        </div>
        <Button
          type="submit"
          className="h-12 px-6 bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
          disabled={!topic.trim() || isLoading}
        >
          {isLoading ? (
            <LoadingDots />
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate
            </>
          )}
        </Button>
      </div>

      {topic && (
        <div className="text-center">
          <Button
            type="button"
            variant="ghost"
            onClick={handleReset}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Clear search
          </Button>
        </div>
      )}
    </form>
  )
}
