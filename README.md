# Quote Generator

A modern, interactive quote generator built with Next.js 15, TypeScript, and Tailwind CSS. Find inspiring quotes on any topic with a beautiful, responsive interface.

## Features

- 🎯 **Smart Search** - Find quotes by topic, author, or keywords
- 💫 **Interactive UI** - Smooth animations and hover effects
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern Design** - Clean, minimal interface inspired by Linear and Vercel
- 📋 **Copy & Share** - Easy quote copying and sharing functionality
- ❤️ **Favorites** - Like and save your favorite quotes
- 🔍 **Topic Suggestions** - Quick access to popular quote categories
- ⚡ **Fast Performance** - Optimized with Next.js 15 and modern React patterns

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind
- **State Management**: React hooks (useState, useCallback)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd quote-generator
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
quote-generator/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   ├── header.tsx        # App header
│   ├── search-form.tsx   # Search form component
│   ├── quote-card.tsx    # Individual quote card
│   ├── quote-results.tsx # Results display
│   └── topic-suggestions.tsx # Topic badges
├── hooks/                # Custom React hooks
│   ├── use-quote-search.ts
│   └── use-copy-to-clipboard.ts
├── lib/                  # Utility functions
│   ├── quotes-data.ts    # Quote database
│   ├── quote-search.ts   # Search logic
│   └── utils.ts         # Utility functions
├── types/               # TypeScript type definitions
│   └── quote.ts
└── public/             # Static assets
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Quote Categories

The app includes quotes from the following categories:

- **Motivation** - Inspirational quotes to drive action
- **Success** - Wisdom about achieving goals
- **Life** - Insights about living meaningfully
- **Wisdom** - Timeless philosophical thoughts
- **Leadership** - Guidance for leading others
- **Creativity** - Inspiration for creative pursuits

## Features in Detail

### Smart Search
- Exact category matching
- Partial keyword matching
- Author name search
- Quote text search
- Fallback to motivational quotes

### Interactive Elements
- Hover effects on cards and buttons
- Smooth animations and transitions
- Loading states with skeleton screens
- Copy to clipboard functionality
- Native sharing API support
- Like/favorite functionality

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling

## Customization

### Adding New Quotes
Edit `lib/quotes-data.ts` to add new quotes or categories:

\`\`\`typescript
export const quotesData: QuoteCategory = {
  newCategory: [
    {
      text: "Your quote text here",
      author: "Author Name",
      category: "newCategory",
    },
  ],
}
\`\`\`

### Styling
The app uses Tailwind CSS with custom utilities. Main styles are in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Component-specific styling

### Configuration
- `tailwind.config.ts` - Tailwind configuration
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## Performance Optimizations

- Server-side rendering with Next.js
- Optimized bundle splitting
- Image optimization (ready for future images)
- CSS optimization with Tailwind
- TypeScript for better development experience
- ESLint for code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Deployment

The app is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Deploy on Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
