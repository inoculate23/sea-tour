#!/bin/bash

# Haawke SE Asia Promo Tour - Local Development Server
# This script starts the React/TypeScript development server

set -e  # Exit on any error

echo "🎵 Starting Haawke SE Asia Promo Tour Website..."
echo "========================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed successfully"
else
    echo "✅ Dependencies already installed"
fi

# Check if build tools are working
echo "🔧 Checking TypeScript configuration..."
if ! npx tsc --noEmit --skipLibCheck; then
    echo "⚠️  TypeScript check failed, but continuing with development server..."
fi

echo ""
echo "🚀 Starting development server..."
echo "🌐 The website will be available at: http://localhost:5173"
echo "🎧 Press Ctrl+C to stop the server"
echo ""
echo "🎯 Features included:"
echo "   • Hero section with tour dates (Oct 30, 2025 - Jan 20, 2026)"
echo "   • Biography highlighting Burning Man & Psychic TV background"
echo "   • Latest AI-enhanced release: Les Barons Wax Cylinders"
echo "   • Music platform links (SoundCloud, Mixcloud, Spotify)"
echo "   • Responsive design with custom animations"
echo ""

# Start the Vite development server
npm run dev