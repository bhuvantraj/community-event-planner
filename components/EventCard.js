"use client";

import Link from 'next/link';

export default function EventCard({ event }) {
    return (
        <Link href={`/events/${event.id}`}>
            <div className="event-card">
                <h3>{event.title}</h3>
                <div className="event-card-meta">
                    <div>📅 {event.date}</div>
                    <div>🕐 {event.time}</div>
                    <div>📍 {event.location}</div>
                </div>
                <p>{event.description}</p>
                <span className="event-card-category">{event.category}</span>
            </div>
        </Link>
    );
}
