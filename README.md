# H320 Gamelist

A modern, responsive game discovery platform built with React and the RAWG API.

## 📋 Description

H320 Gamelist is a project designed to help gamers discover their next favorite title. Leveraging the comprehensive RAWG Video Games Database API, it offers a seamless interface for browsing popular, top-rated, and newly released games.  The application focuses on a clean user experience with robust filtering, search capabilities, and detailed game information, all wrapped in a responsive, accessible design supporting both light and dark modes.

## ✨ Features

- **Dynamic Game Discovery**: Browse curated lists of popular, top-rated, and new games.
- **Infinite Scroll**: Seamlessly browse through thousands of games without interruption.
- **Powerful Search**: Instantly find games by title with a responsive search bar.
- **Advanced Filtering**: Filter games by genre, platform, and other criteria to find exactly what you're looking for.
- **Detailed Game Views**: Access comprehensive game details including descriptions, ratings, platforms, and store links.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dark/Light Mode**: User-preference aware theming for comfortable viewing in any environment.
- **Modern UI**: Built with Radix UI and Tailwind CSS for a polished, professional look.

## 🛠️ Technical Depth

- **Infinite Scrolling**: Implemented using the Intersection Observer API for efficient, seamless data loading.
- **Dynamic Querying**: constructing complex API queries based on active filters (genre, platform, store).
- **Custom Pagination**: Hook-based state management to handle page increments and dataappending.
- **Skeleton Loading**: Optimized user perception during asynchronous data fetching.
- **Responsive Navigation**: Adaptive layouts and navigation components for all screen sizes.

## 🚀 Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/) patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Data Source**: [RAWG API](https://rawg.io/apidocs)

## 📂 Structure

```
src/
├── components/         # Reusable UI components (GameCard, NavBar, etc.)
│   ├── ui/             # Primitive UI elements (buttons, inputs)
├── pages/              # Route components (Home, Browse, GameDetail)
├── assets/             # Static assets
├── lib/                # Utility functions
├── App.jsx             # Main application layout
└── main.jsx            # Entry point
```

## ⚡ How to Run

1.  **Clone the repository**
    ```bash
    git clone https://github.com/CMMhero/gamelist.git
    cd gamelist
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    bun install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory and add your RAWG API key:
    ```env
    VITE_RAWG_API_KEY=your_api_key_here
    ```
    > You can obtain an API key from [RAWG.io](https://rawg.io/apidocs).

4.  **Start the development server**
    ```bash
    npm run dev
    ```

5.  **Build for production**
    ```bash
    npm run build
    ```