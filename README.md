# 🤖 AI Pair Programming Simulator

A fun and interactive web application that simulates pair programming sessions with different AI personalities. Each AI partner has their own unique coding style, perspective, and feedback approach!

![AI Pair Programming Simulator](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **7 Unique AI Personalities** - Each with distinct coding philosophies
- **Interactive Code Editor** - Powered by Monaco Editor (VS Code's editor)
- **Real-time Chat** - Have conversations with your AI pair programming partner
- **Code Feedback** - Get personalized suggestions based on the selected personality
- **Multiple Languages** - Support for JavaScript, TypeScript, Python, Java, Go, and Rust
- **Beautiful UI** - Modern, dark-themed interface with smooth animations

## 🎭 Meet the Personalities

### ⚡ The Pragmatist
*Fast, practical, and results-oriented. Gets things working quickly.*
- Focus: Speed and functionality
- Philosophy: "Ship it now, refactor later"

### ✨ The Perfectionist
*Values clean code, best practices, and maintainability above all.*
- Focus: Code quality and best practices
- Philosophy: "Do it right the first time"

### 🚀 The Speed Demon
*Performance obsessed. Always thinking about optimization and speed.*
- Focus: Performance and efficiency
- Philosophy: "Every millisecond counts"

### 🎓 The Mentor
*Patient teacher who explains concepts and helps you learn.*
- Focus: Education and understanding
- Philosophy: "Learn by doing, understand by explaining"

### 🐛 The Debugger
*Expert at finding bugs, edge cases, and potential issues.*
- Focus: Bug prevention and edge cases
- Philosophy: "What could go wrong?"

### 🎯 The Minimalist
*Believes less code is better. Elegant and simple solutions.*
- Focus: Simplicity and elegance
- Philosophy: "Less is more"

### 🏗️ The Architect
*Thinks about system design, scalability, and architecture.*
- Focus: System design and scalability
- Philosophy: "Think big, build smart"

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A modern web browser

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd ai-pair-programming-simulator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

1. **Select a Personality**: Choose from 7 different AI personalities at the top of the page
2. **Write Code**: Use the code editor to write your code (supports multiple languages)
3. **Get Feedback**: Click "Get Feedback" to see what your AI partner thinks
4. **Chat**: Use the chat panel to have conversations with your AI partner
5. **See Suggestions**: Check the suggestion box at the bottom for ongoing tips

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor (VS Code's editor)
- **Icons**: Lucide React

## 📁 Project Structure

```
ai-pair-programming-simulator/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ChatPanel.tsx        # Chat interface component
│   ├── CodeEditor.tsx       # Monaco editor wrapper
│   └── PersonalitySelector.tsx  # Personality selection UI
├── lib/
│   └── personalities.ts     # Personality definitions and logic
└── package.json
```

## 🎨 Customization

### Adding New Personalities

Edit `lib/personalities.ts` to add new AI personalities:

```typescript
const myPersonality: Personality = {
  id: "my-personality",
  name: "My Personality",
  emoji: "🎨",
  description: "Description here",
  color: "bg-pink-500",
  traits: ["Trait1", "Trait2"],
  getResponse: (code, context) => {
    // Return response based on code
    return "Your response here";
  },
  getSuggestion: (code) => {
    // Return suggestion based on code
    return "Your suggestion here";
  },
};
```

### Modifying Responses

Each personality has `getResponse()` and `getSuggestion()` methods that you can customize to change how they react to code.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Docker

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new AI personalities
- Improve the UI/UX
- Add new features
- Fix bugs
- Improve documentation

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] Real AI integration (OpenAI, Anthropic, etc.)
- [ ] Code execution and testing
- [ ] Save and load code sessions
- [ ] Multiple file support
- [ ] Code diff visualization
- [ ] Voice chat integration
- [ ] Collaborative mode (multiple users)
- [ ] Personality customization UI
- [ ] Export conversations
- [ ] Code snippets library

## 🙏 Acknowledgments

- Inspired by real pair programming experiences
- Built with love for the developer community
- Monaco Editor by Microsoft
- Next.js by Vercel

---

**Made with ❤️ for developers who love to code and learn together!**

