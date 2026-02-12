// Mock users with username, email, and password
export const mockUsers = [
  {
    id: 1,
    username: "demoUser",
    email: "demo@example.com",
    password: "password123"
  },
  {
    id: 2,
    username: "jane",
    email: "jane@example.com",
    password: "password123"
  },
  {
    id: 3,
    username: "alice",
    email: "alice@example.com",
    password: "password123"
  }
];

// Currently logged-in user (stored in localStorage in real app)
export const loggedInUser = {
  id: 1,
  username: "demoUser",
  email: "demo@example.com"
};

// Mock events data with all required attributes
export const mockEvents = [
  {
    id: 1,
    title: "Music Fest",
    date: "2026-02-20",
    time: "18:00",
    location: "City Hall",
    category: "Music",
    description: "Community music event featuring local artists and bands. Enjoy live performances, food stalls, and a vibrant atmosphere.",
    created_by: 1,
    attendees: [
      { id: 1, username: "demoUser" },
      { id: 3, username: "alice" },
      { id: 4, username: "bob" }
    ]
  },
  {
    id: 2,
    title: "Tech Meetup",
    date: "2026-02-21",
    time: "10:00",
    location: "Tech Park",
    category: "Technology",
    description: "Developer meetup to discuss latest trends in web development, AI, and cloud computing.",
    created_by: 2,
    attendees: [
      { id: 2, username: "jane" },
      { id: 5, username: "charlie" }
    ]
  },
  {
    id: 3,
    title: "Art Exhibition",
    date: "2026-02-25",
    time: "14:00",
    location: "Downtown Gallery",
    category: "Art",
    description: "Local artists showcase their work including paintings, sculptures, and digital art.",
    created_by: 1,
    attendees: [
      { id: 1, username: "demoUser" },
      { id: 6, username: "david" }
    ]
  },
  {
    id: 4,
    title: "Food Festival",
    date: "2026-03-01",
    time: "12:00",
    location: "Central Park",
    category: "Food",
    description: "Taste dishes from around the world. Over 50 food vendors, cooking demonstrations, and live entertainment.",
    created_by: 3,
    attendees: [
      { id: 3, username: "alice" },
      { id: 7, username: "eve" }
    ]
  },
  {
    id: 5,
    title: "Morning Yoga Session",
    date: "2026-02-22",
    time: "07:00",
    location: "Riverside Park",
    category: "Sports",
    description: "Start your day with a refreshing yoga session by the river. All levels welcome.",
    created_by: 1,
    attendees: [
      { id: 1, username: "demoUser" }
    ]
  },
  {
    id: 6,
    title: "Coding Workshop",
    date: "2026-02-23",
    time: "15:30",
    location: "Innovation Hub",
    category: "Education",
    description: "Learn React and Next.js from industry experts. Hands-on workshop with real projects.",
    created_by: 2,
    attendees: [
      { id: 2, username: "jane" },
      { id: 1, username: "demoUser" }
    ]
  }
];

// Categories for filtering
export const categories = ["All", "Music", "Technology", "Art", "Food", "Sports", "Education"];
