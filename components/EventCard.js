"use client";

import Link from 'next/link';

export default function EventCard({ event, isCreator = false }) {
    return (
        <Link href={`/events/${event.id}`}>
            <div className="event-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0 }}>{event.title}</h3>
                    {isCreator && (
                        <span style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            padding: '0.3rem 0.75rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            whiteSpace: 'nowrap',
                            marginLeft: '0.5rem'
                        }}>
                            MY EVENT
                        </span>
                    )}
                </div>
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
