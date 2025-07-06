"use client"

import type { Quote } from "@/types/quote"
import { QuoteCard } from "./quote-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuoteResultsProps {
  quotes: Quote[]
  isLoading: boolean
  currentTopic: string
  onNewSearch: () => void
}

export const QuoteResults = ({ quotes, isLoading, currentTopic, onNewSearch }: QuoteResultsProps) => {
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="animate-spin">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-900">Finding quotes about "{currentTopic}"</h2>
          </div>
          <p className="text-gray-600">Searching through our collection of inspiring quotes...</p>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="space-y-4">
                <Skeleton className="h-4 w-8 rounded-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
                <div className="flex items-center gap-3 pt-2">
                  <Skeleton className="h-px w-8" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (quotes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-3">No quotes found</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          We couldn't find any quotes matching "{currentTopic}". Try searching for topics like motivation, success,
          life, wisdom, leadership, or creativity.
        </p>
        <Button onClick={onNewSearch} variant="outline" className="hover:bg-gray-50 transition-colors bg-transparent">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Another Search
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Quotes about "{currentTopic}"</h2>
        <p className="text-gray-600">Here are {quotes.length} inspiring quotes to motivate and inspire you</p>
      </div>

      <div className="grid gap-8 max-w-3xl mx-auto">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} index={index} />
        ))}
      </div>

      <div className="text-center pt-8">
        <Button onClick={onNewSearch} variant="outline" className="hover:bg-gray-50 transition-colors bg-transparent">
          <RefreshCw className="w-4 h-4 mr-2" />
          Search for More Quotes
        </Button>
      </div>
    </div>
  )
}
