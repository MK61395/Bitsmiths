# HackerNews Clone

A simplified clone of HackerNews built with Next.js 14+, TypeScript, TailwindCSS, and shadcn/ui components.

## Features

- 🚀 **Real-time Data**: Fetches live stories from the official HackerNews API
- 📱 **Responsive Design**: Mobile-first approach with TailwindCSS
- ⚡ **Performance**: Built with Next.js App Router for optimal performance
- 🔄 **Pagination**: Load more stories with infinite scroll-like functionality
- 🎨 **Modern UI**: Beautiful interface using shadcn/ui components
- 🛡️ **Type Safety**: Full TypeScript support
- 🔍 **SEO Optimized**: Proper metadata and error handling

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **API**: HackerNews Firebase API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd hackernews-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
hackernews-clone/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── error.tsx       # Error boundary
│   │   └── loading.tsx     # Loading component
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── header.tsx      # Site header
│   │   ├── footer.tsx      # Site footer
│   │   ├── story-list.tsx  # Main story list
│   │   └── story-item.tsx  # Individual story item
│   └── lib/                # Utility functions
│       ├── api.ts          # HackerNews API functions
│       └── types.ts        # TypeScript interfaces
├── public/                  # Static assets
└── package.json            # Dependencies
```

## API Integration

The app integrates with the official HackerNews API:

- **Top Stories**: Fetches the latest top stories
- **Story Details**: Gets individual story information
- **User Data**: Retrieves user profiles and karma
- **Caching**: Implements Next.js caching for optimal performance

## Key Components

### StoryList
- Fetches and displays top stories
- Implements pagination with "Load More" functionality
- Handles loading states and errors gracefully

### StoryItem
- Displays individual story information
- Shows title, URL, points, author, and comments
- Links to original articles and comment threads

### Loading States
- Skeleton loaders for better UX
- Error boundaries for graceful failure handling
- Responsive design for all screen sizes

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. **New API Endpoints**: Add functions to `lib/api.ts`
2. **New Components**: Create in `components/` directory
3. **New Pages**: Add to `app/` directory following App Router conventions
4. **Styling**: Use TailwindCSS classes or extend in `globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [HackerNews](https://news.ycombinator.com/) for the inspiration and API
- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
