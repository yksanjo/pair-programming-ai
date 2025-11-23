"use client";

import { type Personality } from "@/lib/personalities";
import { Check } from "lucide-react";

interface PersonalitySelectorProps {
  personalities: Personality[];
  selectedPersonality: Personality;
  onSelect: (personality: Personality) => void;
}

export function PersonalitySelector({
  personalities,
  selectedPersonality,
  onSelect,
}: PersonalitySelectorProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
      <h3 className="text-sm font-semibold text-gray-400 mb-3">
        Choose Your Pair Programming Partner
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {personalities.map((personality) => (
          <button
            key={personality.id}
            onClick={() => onSelect(personality)}
            className={`
              relative p-4 rounded-lg border-2 transition-all
              ${
                selectedPersonality.id === personality.id
                  ? `border-purple-500 bg-purple-500/20`
                  : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
              }
            `}
          >
            {selectedPersonality.id === personality.id && (
              <div className="absolute top-2 right-2">
                <Check className="w-4 h-4 text-purple-400" />
              </div>
            )}
            <div className="text-center">
              <div className="text-3xl mb-2">{personality.emoji}</div>
              <div className="text-sm font-semibold">{personality.name}</div>
              <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                {personality.description}
              </div>
              <div className="flex flex-wrap gap-1 mt-2 justify-center">
                {personality.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-xs px-2 py-0.5 bg-gray-700 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

