"use client"

import { Search, Navigation, Clock, Euro, Star, ChevronRight } from "lucide-react"

interface Venue {
  name: string
  distance: string
  pricePerHour: string
  nextSlot: string
  rating: number
  facilities: string[]
}

const venues: Venue[] = [
  {
    name: "Sandyford Indoor Arena",
    distance: "2.5km",
    pricePerHour: "\u20AC24/hr",
    nextSlot: "18:30",
    rating: 4.6,
    facilities: ["Changing rooms", "Parking"],
  },
  {
    name: "UCD Sports Centre",
    distance: "1.2km",
    pricePerHour: "\u20AC18/hr",
    nextSlot: "20:00",
    rating: 4.8,
    facilities: ["Showers", "Cafe"],
  },
  {
    name: "Leopardstown Pitch Club",
    distance: "3.1km",
    pricePerHour: "\u20AC20/hr",
    nextSlot: "19:00",
    rating: 4.3,
    facilities: ["Floodlights", "Bar"],
  },
  {
    name: "Rathmines Sports Hub",
    distance: "4.0km",
    pricePerHour: "\u20AC22/hr",
    nextSlot: "21:00",
    rating: 4.5,
    facilities: ["Indoor", "Equipment hire"],
  },
  {
    name: "Dalkey Community Courts",
    distance: "5.8km",
    pricePerHour: "\u20AC15/hr",
    nextSlot: "17:00",
    rating: 4.1,
    facilities: ["Outdoor", "Free parking"],
  },
]

export function CourtsScreen() {
  return (
    <div
      id="panel-courts"
      role="tabpanel"
      className="flex flex-col gap-5 px-5 pb-4"
    >
      {/* Header */}
      <div className="pt-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-coral">
          Find Courts
        </p>
        <h1 className="text-2xl font-extrabold leading-tight text-midnight text-balance">
          We found the pitch. You bring the energy.
        </h1>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-coral" />
        <input
          type="text"
          placeholder="Search by area (e.g., Sandyford)..."
          aria-label="Search venues by area"
          className="w-full rounded-xl border-2 border-coral/40 bg-card py-3.5 pr-4 pl-12 text-sm font-semibold text-midnight placeholder:text-midnight/40 transition-colors duration-200 focus:border-coral focus:ring-2 focus:ring-coral/20 focus:outline-none"
        />
      </div>

      {/* Venues List */}
      <div className="flex flex-col gap-4">
        {venues.map((venue, i) => (
          <article
            key={i}
            className="overflow-hidden rounded-2xl border-2 border-coral/40 bg-card p-4 shadow-sm transition-all duration-200 hover:border-coral hover:shadow-md"
          >
            {/* Venue Name + Rating */}
            <div className="mb-3 flex items-start justify-between">
              <h2 className="text-base font-extrabold text-midnight pr-2">
                {venue.name}
              </h2>
              <div className="flex shrink-0 items-center gap-1 rounded-full bg-vivid/10 px-2 py-0.5">
                <Star className="h-3.5 w-3.5 fill-vivid text-vivid" />
                <span className="text-xs font-bold text-vivid">
                  {venue.rating}
                </span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="mb-3 grid grid-cols-3 gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-midnight/70">
                <Navigation className="h-3.5 w-3.5 text-coral" />
                {venue.distance}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-midnight/70">
                <Euro className="h-3.5 w-3.5 text-coral" />
                {venue.pricePerHour}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-midnight/70">
                <Clock className="h-3.5 w-3.5 text-coral" />
                {venue.nextSlot}
              </div>
            </div>

            {/* Facility Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {venue.facilities.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-ice px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-midnight/70"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-vivid py-3 text-sm font-extrabold uppercase tracking-wider text-cta transition-all duration-200 hover:bg-coral hover:shadow-lg active:scale-[0.98]">
              Secure Court
              <ChevronRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
