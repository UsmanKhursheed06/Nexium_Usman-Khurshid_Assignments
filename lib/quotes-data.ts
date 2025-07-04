import type { QuoteCategory, Quote } from "@/types/quote"

export const quotesData: QuoteCategory = {
  motivation: [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "motivation",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "motivation",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "motivation",
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
      category: "motivation",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      category: "motivation",
    },
  ],
  success: [
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
      category: "success",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      category: "success",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      category: "success",
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
      category: "success",
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      category: "success",
    },
  ],
  life: [
    {
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon",
      category: "life",
    },
    {
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
      category: "life",
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius",
      category: "life",
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
      category: "life",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      category: "life",
    },
  ],
  wisdom: [
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
      category: "wisdom",
    },
    {
      text: "Yesterday is history, tomorrow is a mystery, today is a gift.",
      author: "Eleanor Roosevelt",
      category: "wisdom",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      category: "wisdom",
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      category: "wisdom",
    },
    {
      text: "Knowledge speaks, but wisdom listens.",
      author: "Jimi Hendrix",
      category: "wisdom",
    },
  ],
  leadership: [
    {
      text: "A leader is one who knows the way, goes the way, and shows the way.",
      author: "John C. Maxwell",
      category: "leadership",
    },
    {
      text: "The art of leadership is saying no, not saying yes.",
      author: "Tony Blair",
      category: "leadership",
    },
    {
      text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
      author: "Simon Sinek",
      category: "leadership",
    },
    {
      text: "Great leaders are willing to sacrifice their own interests for the good of the team.",
      author: "John Wooden",
      category: "leadership",
    },
    {
      text: "The function of leadership is to produce more leaders, not more followers.",
      author: "Ralph Nader",
      category: "leadership",
    },
  ],
  creativity: [
    {
      text: "Creativity is intelligence having fun.",
      author: "Albert Einstein",
      category: "creativity",
    },
    {
      text: "The creative adult is the child who survived.",
      author: "Ursula K. Le Guin",
      category: "creativity",
    },
    {
      text: "Imagination is more important than knowledge.",
      author: "Albert Einstein",
      category: "creativity",
    },
    {
      text: "Creativity takes courage.",
      author: "Henri Matisse",
      category: "creativity",
    },
    {
      text: "The secret to creativity is knowing how to hide your sources.",
      author: "Pablo Picasso",
      category: "creativity",
    },
  ],
}

export const getQuoteCategories = (): string[] => {
  return Object.keys(quotesData)
}

export const getRandomQuote = (): Quote => {
  const categories = Object.keys(quotesData)
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const categoryQuotes = quotesData[randomCategory]
  return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)]
}
