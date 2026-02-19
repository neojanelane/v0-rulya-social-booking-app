"use client"

interface Sport {
  name: string
  emoji: string
  activePlayers: string
  tagline: string
}

const sports: Sport[] = [
  {
    name: "Football",
    emoji: "\u26BD",
    activePlayers: "142 playing this week",
    tagline: "The classic. No explanation needed.",
  },
  {
    name: "Table Tennis",
    emoji: "\uD83C\uDFD3",
    activePlayers: "87 playing this week",
    tagline: "Tiny ball. Big ego.",
  },
  {
    name: "Basketball",
    emoji: "\uD83C\uDFC0",
    activePlayers: "63 playing this week",
    tagline: "Buckets. No bench warmers.",
  },
  {
    name: "Badminton",
    emoji: "\uD83C\uDFF8",
    activePlayers: "41 playing this week",
    tagline: "Fast hands, faster rallies.",
  },
  {
    name: "Tennis",
    emoji: "\uD83C\uDFBE",
    activePlayers: "55 playing this week",
    tagline: "Deuce it out.",
  },
  {
    name: "Volleyball",
    emoji: "\uD83C\uDFD0",
    activePlayers: "29 playing this week",
    tagline: "Spike your evening plans.",
  },
]

export function SportsScreen() {
  return (
    <div
      id="panel-sports"
      role="tabpanel"
      className="flex flex-col gap-5 px-5 pb-4"
    >
      {/* Header */}
      <div className="pt-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-coral">
          Browse Sports
        </p>
        <h1 className="text-2xl font-extrabold leading-tight text-midnight text-balance">
          Pick your ball.
        </h1>
        <p className="mt-2 text-sm font-medium text-midnight/60">
          Choose a sport. We will handle the rest.
        </p>
      </div>

      {/* Sports Grid */}
      <div className="grid grid-cols-2 gap-4">
        {sports.map((sport) => (
          <button
            key={sport.name}
            className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-coral/40 bg-card p-5 shadow-sm transition-all duration-200 hover:scale-[1.04] hover:border-coral hover:bg-coral/10 hover:shadow-md active:scale-[0.97]"
          >
            {/* Emoji */}
            <span
              className="text-5xl transition-transform duration-200 group-hover:scale-110"
              role="img"
              aria-hidden="true"
            >
              {sport.emoji}
            </span>

            {/* Name */}
            <h2 className="text-base font-extrabold text-midnight">
              {sport.name}
            </h2>

            {/* Tagline */}
            <p className="text-center text-[11px] font-semibold text-midnight/50 leading-snug">
              {sport.tagline}
            </p>

            {/* Active Players */}
            <span className="rounded-full bg-ice px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-midnight/60">
              {sport.activePlayers}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
