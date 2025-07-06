"use client"

import { getQuoteCategories } from "@/lib/quotes-data"
import { Badge } from "@/components/ui/badge"

interface TopicSuggestionsProps {
  onTopicSelect: (topic: string) => void
}

export const TopicSuggestions = ({ onTopicSelect }: TopicSuggestionsProps) => {
  const categories = getQuoteCategories()

  return (
    <div className="text-center space-y-4">
      <p className="text-gray-500 text-sm">Popular topics to explore:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="secondary"
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer capitalize transform hover:scale-105"
            onClick={() => onTopicSelect(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
