"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, Share2, Heart } from "lucide-react"
import type { Quote } from "@/types/quote"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

interface QuoteCardProps {
  quote: Quote
  index: number
}

export const QuoteCard = ({ quote, index }: QuoteCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const handleCopy = () => {
    const quoteText = `"${quote.text}" - ${quote.author}`
    copyToClipboard(quoteText)
  }

  const handleShare = async () => {
    const quoteText = `"${quote.text}" - ${quote.author}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Inspiring Quote",
          text: quoteText,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      copyToClipboard(quoteText)
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <Card
      className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
      style={{
        animationDelay: `${index * 150}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      <CardContent className="p-8 relative">
        <div className="space-y-6">
          {/* Quote Icon */}
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`h-8 w-8 p-0 hover:bg-red-50 transition-colors ${isLiked ? "text-red-500" : "text-gray-400"}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8 w-8 p-0 hover:bg-blue-50 transition-colors"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="h-8 w-8 p-0 hover:bg-green-50 transition-colors"
              >
                <Share2 className="w-4 h-4 text-gray-400 hover:text-green-500" />
              </Button>
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-lg text-gray-800 leading-relaxed font-medium">"{quote.text}"</blockquote>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-px bg-gray-300 group-hover:bg-gray-400 transition-colors"></div>
            <cite className="text-gray-600 font-medium not-italic group-hover:text-gray-800 transition-colors">
              {quote.author}
            </cite>
            {quote.category && (
              <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full capitalize">
                {quote.category}
              </span>
            )}
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-lg transition-colors duration-200 pointer-events-none"></div>
      </CardContent>
    </Card>
  )
}
