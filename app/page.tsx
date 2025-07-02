"use client"
import { Header } from "@/components/header"
import { SearchForm } from "@/components/search-form"
import { TopicSuggestions } from "@/components/topic-suggestions"
import { QuoteResults } from "@/components/quote-results"
import { useQuoteSearch } from "@/hooks/use-quote-search"

export default function QuoteGenerator() {
  const { quotes, isLoading, isSearched, currentTopic, searchQuotes, resetSearch } = useQuoteSearch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-5xl mx-auto">
          <Header />

          <div className="mb-12">
            <SearchForm onSearch={searchQuotes} isLoading={isLoading} onReset={resetSearch} />
          </div>

          {isSearched || isLoading ? (
            <QuoteResults quotes={quotes} isLoading={isLoading} currentTopic={currentTopic} onNewSearch={resetSearch} />
          ) : (
            <TopicSuggestions onTopicSelect={searchQuotes} />
          )}
        </div>
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <p>Find inspiration through timeless wisdom and quotes</p>
      </footer>
    </div>
  )
}
