# KickoTech Project Setup

This project is built with **React**, **Vite**, **Three.js**, and **Tailwind CSS v4**. To run this project correctly in VS Code, please follow these steps:

## Prerequisites

- **Node.js**: Version **20.0.0** or higher is required (due to Tailwind CSS v4 requirements).
- **npm**: Version **9.0.0** or higher.

## Getting Started

1. **Install Dependencies**:
   Open your terminal in VS Code and run:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a file named `.env` in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```
   *Note: You can get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).*

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Common Issues

### "not working" in VS Code
- **Node Version**: Ensure you are using Node 20+. Check with `node -v`.
- **HMR Errors**: You might see connection errors in the browser console. This is often just the Vite HMR trying to connect. If the page loads, it's working.
- **Port Conflict**: If port 3000 is in use, you can change it in `package.json` or `vite.config.ts`.

### Chatbot not responding
- Make sure you have a valid `GEMINI_API_KEY` in your `.env` file.
- Check the browser console for network errors.
