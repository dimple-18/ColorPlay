import { useState } from "react";

const PALETTE = [
  { label: "Red",    value: "#ef4444", text: "white" },
  { label: "Green",  value: "#22c55e", text: "white" },
  { label: "Blue",   value: "#3b82f6", text: "white" },
  { label: "Yellow", value: "#eab308", text: "black" },
  { label: "Purple", value: "#a855f7", text: "white" },
  { label: "Orange", value: "#ff8c00", text: "white" },
];

export default function App() {
  const [color, setColor] = useState("#6b7280"); 

  return (
    <div
      className="w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl">
          <h1 className="text-white text-2xl font-semibold tracking-wide drop-shadow">
            Background Color Changer
          </h1>
          <p className="text-white/80 text-sm text-center">
            Current: <span className="font-medium">{color}</span>
          </p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-10 px-4">
        <div className="mx-auto max-w-3xl rounded-full backdrop-blur-md bg-white/70 border border-white/40 shadow-2xl px-3 py-2">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {PALETTE.map(({ label, value, text }) => (
              <button
                key={label}
                type="button"
                onClick={() => setColor(value)}
                aria-label={`Set background to ${label}`}
                className={`px-4 py-2 rounded-full shadow-lg transition-transform duration-200 
                            hover:scale-105 active:scale-95 focus:outline-none 
                            focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/30`}
                style={{
                  backgroundColor: value,
                  color: text,
                }}
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                setColor(
                  `#${Math.floor(Math.random() * 0xffffff)
                    .toString(16)
                    .padStart(6, "0")}`
                )
              }
              className="px-4 py-2 rounded-full bg-black text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40"
              aria-label="Set random background"
              title="Random color"
            >
              Random
            </button>

            <button
              type="button"
              onClick={() => setColor("#6b7280")}
              className="px-4 py-2 rounded-full bg-white text-gray-800 border border-gray-200 shadow hover:bg-gray-50 transition"
              aria-label="Reset background"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
