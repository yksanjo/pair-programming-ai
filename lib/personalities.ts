export interface Personality {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
  traits: string[];
  getResponse: (code: string, context: string) => string;
  getSuggestion: (code: string) => string;
}

// The Pragmatist - Gets things done, practical solutions
const pragmatist: Personality = {
  id: "pragmatist",
  name: "The Pragmatist",
  emoji: "⚡",
  description: "Fast, practical, and results-oriented. Gets things working quickly.",
  color: "bg-blue-500",
  traits: ["Fast", "Practical", "Results-focused"],
  getResponse: (code, context) => {
    const responses = [
      "Looks good! Let's ship it. We can refactor later if needed.",
      "This works. Don't overthink it - sometimes simple is better.",
      "Nice! Quick and effective. That's what matters.",
      "I like it. Let's move forward and iterate if we hit issues.",
      "Solid approach. We can optimize later if performance becomes a problem.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Consider: Keep it simple. This works, so let's not overcomplicate it.";
  },
};

// The Perfectionist - Clean code, best practices
const perfectionist: Personality = {
  id: "perfectionist",
  name: "The Perfectionist",
  emoji: "✨",
  description: "Values clean code, best practices, and maintainability above all.",
  color: "bg-purple-500",
  traits: ["Clean Code", "Best Practices", "Maintainable"],
  getResponse: (code, context) => {
    const responses = [
      "Hmm, this works but we should add error handling and maybe extract this into a function.",
      "I see what you're doing. Could we add some JSDoc comments and type safety?",
      "Good start! But let's refactor this to follow SOLID principles.",
      "This is functional, but I'd suggest breaking it into smaller, testable functions.",
      "Nice logic! However, we should consider edge cases and add proper validation.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Suggestion: Add error handling, type safety, and break into smaller functions for better testability.";
  },
};

// The Speed Demon - Optimize everything
const speedDemon: Personality = {
  id: "speed-demon",
  name: "The Speed Demon",
  emoji: "🚀",
  description: "Performance obsessed. Always thinking about optimization and speed.",
  color: "bg-orange-500",
  traits: ["Performance", "Optimization", "Efficiency"],
  getResponse: (code, context) => {
    const responses = [
      "This works, but we could optimize this loop - O(n²) is killing us here!",
      "Good code! But let's cache this result - we're recalculating it every time.",
      "I see a bottleneck. We should use a Set instead of an array for O(1) lookups.",
      "Nice! But this async operation could be parallelized for better performance.",
      "Functional, but we're creating too many intermediate arrays. Let's use a generator!",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Optimization: Consider time/space complexity. Can we reduce iterations or use better data structures?";
  },
};

// The Mentor - Teaching and explaining
const mentor: Personality = {
  id: "mentor",
  name: "The Mentor",
  emoji: "🎓",
  description: "Patient teacher who explains concepts and helps you learn.",
  color: "bg-green-500",
  traits: ["Educational", "Patient", "Explanatory"],
  getResponse: (code, context) => {
    const responses = [
      "Great job! Let me explain why this pattern works well here...",
      "I like your approach! Did you know there's also an alternative way using...",
      "This is good! Here's a tip: when you see this pattern, it usually means...",
      "Nice work! One thing to remember: this technique is useful because...",
      "Good thinking! Let's talk about why this solution is effective and when to use it.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Learning tip: This is a great opportunity to understand how [concept] works. Want me to explain?";
  },
};

// The Debugger - Finds bugs and edge cases
const debugger: Personality = {
  id: "debugger",
  name: "The Debugger",
  emoji: "🐛",
  description: "Expert at finding bugs, edge cases, and potential issues.",
  color: "bg-red-500",
  traits: ["Bug Hunter", "Edge Cases", "Testing"],
  getResponse: (code, context) => {
    const responses = [
      "Wait, what happens if the input is null or undefined? We need a guard clause.",
      "I see a potential issue here - this could throw an error if the array is empty.",
      "Good code, but have we considered the edge case where...",
      "This looks fine, but I'm worried about race conditions in this async code.",
      "Nice logic! But what if the user passes an empty string? Let's add validation.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Bug check: Add null/undefined checks, handle empty inputs, and test edge cases.";
  },
};

// The Minimalist - Less is more
const minimalist: Personality = {
  id: "minimalist",
  name: "The Minimalist",
  emoji: "🎯",
  description: "Believes less code is better. Elegant and simple solutions.",
  color: "bg-indigo-500",
  traits: ["Simple", "Elegant", "Minimal"],
  getResponse: (code, context) => {
    const responses = [
      "This works, but we could do this in half the lines. Less is more!",
      "Good idea! But I think we can simplify this - do we really need all these variables?",
      "I like it, but can we make it more concise? Every line should earn its place.",
      "Functional, but we're overcomplicating. Let's strip it down to the essentials.",
      "Nice! But I bet we can express this more elegantly with fewer lines.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Simplify: Can we reduce this to fewer lines? Look for opportunities to make it more concise.";
  },
};

// The Architect - System design and structure
const architect: Personality = {
  id: "architect",
  name: "The Architect",
  emoji: "🏗️",
  description: "Thinks about system design, scalability, and architecture.",
  color: "bg-teal-500",
  traits: ["System Design", "Scalable", "Architecture"],
  getResponse: (code, context) => {
    const responses = [
      "This works for now, but how will this scale when we have 10x more data?",
      "Good solution! But let's think about the bigger picture - how does this fit into our architecture?",
      "I like it, but we should consider making this more modular for future extensibility.",
      "This is fine, but have we thought about how this component will interact with others?",
      "Nice code! But let's design this with separation of concerns in mind.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  getSuggestion: (code) => {
    return "Architecture: Consider scalability, modularity, and how this fits into the larger system design.";
  },
};

export const personalities: Personality[] = [
  pragmatist,
  perfectionist,
  speedDemon,
  mentor,
  debugger,
  minimalist,
  architect,
];

export function getPersonality(id: string): Personality | undefined {
  return personalities.find((p) => p.id === id);
}

