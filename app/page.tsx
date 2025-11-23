"use client";

import { useState } from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { ChatPanel } from "@/components/ChatPanel";
import { PersonalitySelector } from "@/components/PersonalitySelector";
import { personalities, type Personality } from "@/lib/personalities";
import { MessageCircle, Code2, Sparkles } from "lucide-react";

export default function Home() {
  const [selectedPersonality, setSelectedPersonality] = useState<Personality>(
    personalities[0]
  );
  const [code, setCode] = useState(`function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}`);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string; timestamp: Date }>
  >([
    {
      role: "assistant",
      content: `Hey! I'm ${selectedPersonality.name} ${selectedPersonality.emoji}. ${selectedPersonality.description} Let's code together!`,
      timestamp: new Date(),
    },
  ]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleGetFeedback = () => {
    const feedback = selectedPersonality.getResponse(code, "");
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: feedback,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = (message: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: message, timestamp: new Date() },
    ]);

    // Simulate AI response
    setTimeout(() => {
      const response = selectedPersonality.getResponse(code, message);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response, timestamp: new Date() },
      ]);
    }, 500);
  };

  const handlePersonalityChange = (personality: Personality) => {
    setSelectedPersonality(personality);
    setMessages([
      {
        role: "assistant",
        content: `Hey! I'm ${personality.name} ${personality.emoji}. ${personality.description} Ready to pair program!`,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Pair Programming Simulator
            </h1>
          </div>
          <p className="text-gray-400">
            Experience pair programming with different AI personalities. Each
            has their own coding style and perspective!
          </p>
        </div>

        {/* Personality Selector */}
        <PersonalitySelector
          personalities={personalities}
          selectedPersonality={selectedPersonality}
          onSelect={handlePersonalityChange}
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Code Editor Section */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold">Code Editor</h2>
            </div>
            <CodeEditor code={code} onChange={handleCodeChange} />
            <button
              onClick={handleGetFeedback}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Get Feedback from {selectedPersonality.name}
            </button>
          </div>

          {/* Chat Panel */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-green-400" />
              <h2 className="text-xl font-semibold">
                Chat with {selectedPersonality.name}
              </h2>
            </div>
            <ChatPanel
              messages={messages}
              onSendMessage={handleSendMessage}
              personality={selectedPersonality}
            />
          </div>
        </div>

        {/* Suggestion Box */}
        <div className="mt-6 bg-gray-800/50 rounded-lg border border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <div
              className={`${selectedPersonality.color} w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0`}
            >
              {selectedPersonality.emoji}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                {selectedPersonality.name}'s Suggestion
              </h3>
              <p className="text-gray-300 text-sm">
                {selectedPersonality.getSuggestion(code)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

