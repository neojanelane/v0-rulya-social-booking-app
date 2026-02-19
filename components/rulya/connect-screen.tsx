"use client"

import { Clock, MapPin, Users, Zap } from "lucide-react"

interface Game {
  sport: string
  emoji: string
  location: string
  time: string
  spotsTotal: number
  spotsFilled: number
  urgency?: string
}

const games: Game[] = [
  {
    sport: "5-a-side Football",
    emoji: "\u26BD",
    location: "Blackrock",
    time: "Tonight @ 19:00",
    spotsTotal: 10,
    spotsFilled: 8,
    urgency: "Filling fast",
  },
  {
    sport: "Doubles Table Tennis",
    emoji: "\uD83C\uDFD3",
    location: "Grand Canal Dock",
    time: "Tomorrow @ 13:00",
    spotsTotal: 4,
    spotsFilled: 3,
    urgency: "Almost full",
  },
]

function SpotsBar({ filled, total }: { filled: number; total: number }) {
  const percentage = (filled / total) * 100
  const remaining = total - filled
  const isAlmostFull = remaining <= 2

  return (
    <div className="flex items-center gap-3">
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ice">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isAlmostFull ? "bg-vivid" : "bg-coral"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span
        className={`text-xs font-bold whitespace-nowrap ${
          isAlmostFull ? "text-vivid" : "text-midnight"
        }`}
      >
        {remaining}/{total} left
      </span>
    </div>
  )
}

export function ConnectScreen() {
  return (
    <div
      id="panel-connect"
      role="tabpanel"
      className="flex flex-1 flex-col gap-5 px-5 pb-4"
    >
      {/* Header */}
      <div className="pt-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-coral">
          Active Games
        </p>
        <h1 className="text-2xl font-extrabold leading-tight text-midnight text-balance">
          Skip the group chat. Just play.
        </h1>
        <p className="mt-2 text-sm font-medium text-midnight/60">
          Solo players welcome. No awkward WhatsApp polls.
        </p>
      </div>

      {/* Games Feed */}
      <div className="flex flex-1 flex-col gap-4">
        {games.map((game, i) => (
          <article
            key={i}
            className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border-2 border-coral/40 bg-card p-4 shadow-sm transition-all duration-200 hover:border-coral hover:shadow-md"
          >
            {/* Urgency Badge */}
            {game.urgency && (
              <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-vivid/10 px-2.5 py-1">
                <Zap className="h-3 w-3 text-vivid" />
                <span className="text-[11px] font-bold uppercase tracking-wide text-vivid">
                  {game.urgency}
                </span>
              </div>
            )}

            {/* Sport + Emoji */}
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {game.emoji}
                </span>
                <h2 className="text-base font-extrabold text-midnight">
                  {game.sport}
                </h2>
              </div>
            </div>

            {/* Details */}
            <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-semibold text-midnight/70">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-coral" />
                {game.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-coral" />
                {game.time}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-coral" />
                {game.spotsFilled} joined
              </span>
            </div>

            {/* Spots Bar */}
            <div className="mt-auto mb-4">
              <SpotsBar
                filled={game.spotsFilled}
                total={game.spotsTotal}
              />
            </div>

            {/* CTA */}
            <button className="w-full rounded-xl bg-vivid py-3 text-sm font-extrabold uppercase tracking-wider text-cta transition-all duration-200 hover:bg-coral hover:shadow-lg active:scale-[0.98]">
              Drop In
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
