# AI Bedtime Story Generator 🌙✨

A full-stack application that generates personalized bedtime stories using **Google Gemini AI**.

## Features

- 🤖 **AI-Powered Stories**: Uses Google Gemini 2.5 Flash for creative story generation
- 🎨 **Personalized Stories**: Custom stories based on child's name, age, and preferences
- 🎭 **Theme Selection**: Choose from various themes or let AI decide
- 📚 **Moral Lessons**: Optionally include educational moral lessons
- ⏱️ **Adjustable Length**: Short, medium, or long stories
- 🖨️ **Print Stories**: Built-in print functionality for story preservation
- 🎨 **Beautiful UI**: Dreamy, bedtime-themed interface with smooth animations
- 🚀 **Fast Development**: Vite-powered frontend with hot module replacement

## Tech Stack

### Backend
- **Node.js** + **Express**: RESTful API server
- **Google Gemini AI**: AI model for story generation (gemini-2.5-flash)
- **Joi**: Request validation
- **Docker**: Containerization support via docker-compose

### Frontend
- **React 19** + **TypeScript**: Type-safe UI components
- **Vite**: Fast development and building
- **React Router DOM**: Client-side routing
- **React to Print**: Print functionality for stories
- **CSS3**: Custom animations and gradients

## Prerequisites

1. **Node.js 18+**
2. **Google Gemini API Key** - [Get your API key](https://makersuite.google.com/app/apikey)

## Quick Start

### 1. Get Google Gemini API Key

Visit [Google AI Studio](https://makersuite.google.com/app/apikey) to get your free API key.

### 2. Setup Backend

```bash
cd ai-bed-story/backend
npm install

# Create .env file
cat > .env << EOF
PORT=3001
NODE_ENV=development
GEMINI_API_KEY=your_api_key_here
EOF

# Start the server
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:3001" > .env

# Start the dev server
npm run dev
```

### 4. Open Your Browser

Visit: **http://localhost:5173**

## Docker Setup (Optional)

```bash
# Ensure .env files exist in both backend/ and frontend/
docker-compose up --build
```

## API Endpoints

### POST `/api/story/generate`
Generate a new bedtime story.

**Request:**
```json
{
  "childName": "Emma",
  "age": 6,
  "theme": "Space adventure",
  "moral": "Courage and curiosity",
  "length": "medium"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "story": "Once upon a time...",
    "metadata": {
      "childName": "Emma",
      "age": 6,
      "theme": "Space adventure",
      "length": "medium",
      "generatedAt": "2025-12-30T00:00:00.000Z"
    }
  }
}
```

### GET `/health/ai`
Check AI service connection and status.

**Response:**
```json
{
  "running": true,
  "model": "gemini-2.5-flash",
  "service": "Google Gemini AI"
}
```

### GET `/health`
Basic health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Bedtime Story API is running"
}
```

## Configuration

### Backend Environment Variables

```env
PORT=3001
NODE_ENV=development
GEMINI_API_KEY=your_api_key_here
```

### Frontend Environment Variables

```env
VITE_API_URL=http://localhost:3001
```

## Project Structure

```
ai-bed-story/
├── backend/
│   ├── src/
│   │   ├── index.js              # Express server
│   │   ├── routes/
│   │   │   └── story.route.js    # Story API endpoints
│   │   ├── services/
│   │   │   ├── prompt.service.js # Prompt engineering
│   │   │   ├── ai.service.js     # Gemini AI integration
│   │   │   └── tts.service.js    # TTS placeholder
│   │   └── utils/
│   │       └── validator.js      # Request validation
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StoryGenerator.tsx
│   │   │   └── StoryDisplay.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── .env
│
├── docker-compose.yml
└── README.md
```

## Troubleshooting

### "GEMINI_API_KEY is not set"

1. Make sure you created a `.env` file in the `backend/` directory
2. Add your API key: `GEMINI_API_KEY=your_actual_api_key_here`
3. Restart the backend server

### "Failed to generate story"

1. Verify your API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Check that you have quota available on your Google Cloud project
3. Check the backend console for detailed error messages

### Server Port Already in Use

```bash
# Kill the process using port 3001
lsof -ti:3001 | xargs kill -9

# Or change the port in backend/.env
PORT=3002
```

### CORS Errors

Make sure the frontend URL matches the backend CORS configuration:
- Backend default allows all origins (`cors()` without options)
- Frontend `VITE_API_URL` should point to the backend

## Why Google Gemini AI?

- ✅ **Fast Generation**: Gemini 2.5 Flash is optimized for speed
- ✅ **Creative Storytelling**: Excellent at creative writing and narratives
- ✅ **Generous Free Tier**: Free API usage for development
- ✅ **Low Latency**: Quick response times for interactive apps

## Future Enhancements

- [ ] Text-to-Speech narration (service placeholder exists)
- [ ] Image generation for story illustrations
- [ ] Save and share stories
- [ ] Multiple language support
- [ ] PDF export (currently using print-to-PDF)
- [ ] Story history/favorites

## Scripts

### Backend
```bash
npm run dev    # Start with nodemon (auto-reload)
npm start      # Start production server
```

### Frontend
```bash
npm run dev    # Start Vite dev server
npm run build  # Build for production
npm run lint   # Run ESLint
npm run preview # Preview production build
```

## License

MIT

---

Made with ❤️ for sweet dreams and magical bedtimes
