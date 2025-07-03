"use client"

import { useState, useCallback } from "react"

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
      return true
    } catch (error) {
      console.error("Failed to copy text: ", error)
      return false
    }
  }, [])

  return { isCopied, copyToClipboard }
}
