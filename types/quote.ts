export interface Quote {
  text: string
  author: string
  category?: string
}

export interface QuoteCategory {
  [key: string]: Quote[]
}
