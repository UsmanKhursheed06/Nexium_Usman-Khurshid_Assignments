"use client"

import { useState, useCallback } from "react"
import type { Quote } from "@/types/quote"
import { findRelevantQuotes } from "@/lib/quote-search"

export const useQuoteSearch = () => {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSearched, setIsSearched] = useState(false)
  const [currentTopic, setCurrentTopic] = useState("")

  const searchQuotes = useCallback(async (topic: string) => {
    if (!topic.trim()) return

    setIsLoading(true)
    setCurrentTopic(topic)

    // Simulate API delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    const relevantQuotes = findRelevantQuotes(topic)
    setQuotes(relevantQuotes)
    setIsSearched(true)
    setIsLoading(false)
  }, [])

  const resetSearch = useCallback(() => {
    setQuotes([])
    setIsSearched(false)
    setCurrentTopic("")
    setIsLoading(false)
  }, [])

  return {
    quotes,
    isLoading,
    isSearched,
    currentTopic,
    searchQuotes,
    resetSearch,
  }
}
