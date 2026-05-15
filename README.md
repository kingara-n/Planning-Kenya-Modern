# Planning Kenya Modern

A modern, minimalist architectural website for Planning Kenya.

## Technology Stack
- **Framework**: Vite + React + TypeScript
- **Routing**: @tanstack/react-router
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion
- **Database**: Supabase

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kingara-n/Planning-Kenya-Modern.git
   cd Planning-Kenya-Modern
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file based on the provided secrets:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Assets**:
   Note: High-resolution image assets (~1.7 GB) are not included in this repository due to size constraints. Please sync the `public/assets/images` directory manually or via Git LFS.

5. **Run Locally**:
   ```bash
   npm run dev
   ```

## Repository Structure
- `src/components/site`: Modular UI components (Nav, Hero, Team, etc.)
- `src/routes`: Application routes and layout
- `src/data`: Portfolio and adventure data sources
- `src/integrations`: Supabase configuration
