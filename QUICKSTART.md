# 🚀 Quick Start Guide

Get up and running with AI Pair Programming Simulator in 3 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 16
- React 19
- TypeScript
- Monaco Editor
- Tailwind CSS
- And all other dependencies

## Step 2: Run the Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 16.0.3
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

## Step 3: Open in Browser

Navigate to **http://localhost:3000** in your browser.

## Step 4: Start Pair Programming! 🎉

1. **Choose a personality** from the top selector
2. **Write some code** in the editor
3. **Click "Get Feedback"** to see what your AI partner thinks
4. **Chat** with your AI partner in the chat panel
5. **Try different personalities** to see how they react differently!

## Example Code to Try

Try pasting this code and getting feedback from different personalities:

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

Notice how:
- **The Pragmatist** says "Looks good, ship it!"
- **The Perfectionist** wants error handling
- **The Speed Demon** suggests optimization
- **The Debugger** worries about empty arrays
- **The Minimalist** wants fewer lines
- And so on!

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
Try clearing cache:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
Make sure you're using Node.js 18+:
```bash
node --version
```

## Next Steps

- Read the full [README.md](./README.md) for more details
- Customize personalities in `lib/personalities.ts`
- Add your own code examples
- Deploy to Vercel for free!

Happy coding! 🎉

