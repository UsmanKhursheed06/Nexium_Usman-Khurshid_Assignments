import type { Quote } from "@/types/quote"
import { quotesData } from "./quotes-data"

export const findRelevantQuotes = (searchTopic: string): Quote[] => {
  if (!searchTopic.trim()) return []

  const normalizedTopic = searchTopic.toLowerCase().trim()

  // First, try to find exact category match
  const exactMatch = quotesData[normalizedTopic as keyof typeof quotesData]
  if (exactMatch) {
    return exactMatch.slice(0, 3)
  }

  // Then, search for partial matches in category names
  const categoryMatches: Quote[] = []
  Object.entries(quotesData).forEach(([category, categoryQuotes]) => {
    if (category.includes(normalizedTopic) || normalizedTopic.includes(category)) {
      categoryMatches.push(...categoryQuotes)
    }
  })

  if (categoryMatches.length > 0) {
    return categoryMatches.slice(0, 3)
  }

  // Finally, search within quote text and authors
  const textMatches: Quote[] = []
  Object.values(quotesData).forEach((categoryQuotes) => {
    categoryQuotes.forEach((quote) => {
      if (quote.text.toLowerCase().includes(normalizedTopic) || quote.author.toLowerCase().includes(normalizedTopic)) {
        textMatches.push(quote)
      }
    })
  })

  if (textMatches.length > 0) {
    return textMatches.slice(0, 3)
  }

  // If no matches found, return random quotes from motivation category
  return quotesData.motivation.slice(0, 3)
}
