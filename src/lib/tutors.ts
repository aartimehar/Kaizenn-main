export interface Tutor {
    id: string;
    name: string;
    title: string;
    subject: string;
    masteryLevel: 'King' | 'Queen' | 'Knight';
    philosophy: string;
    qualifications: string[];
    image: string;
    availability: string;
    rating: number;
    hourlyRate: number;
    bio: string;
}

export const tutors: Tutor[] = [
    {
        id: "dr-evelyn-reed",
        name: "Dr. Evelyn Reed",
        title: "PhD in Physics, 15+ Years Experience",
        subject: "Physics",
        masteryLevel: "Queen",
        philosophy: "I teach students to see the universe as a grand puzzle, where every formula is a clue waiting to be understood.",
        qualifications: ["PhD in Physics", "Quantum Mechanics", "Astrophysics", "Classical Mechanics"],
        image: "https://placehold.co/400x400.png",
        availability: "Mon, Wed, Fri evenings",
        rating: 4.9,
        hourlyRate: 85,
        bio: "Dr. Evelyn Reed is a seasoned physicist with over 15 years of both research and teaching experience. She excels at breaking down complex concepts in quantum mechanics and astrophysics into digestible, strategic lessons. Her approach is to build a strong foundational understanding, allowing students to tackle advanced problems with confidence. She believes learning is a strategic game of uncovering universal laws."
    },
    {
        id: "mr-samuel-chen",
        name: "Mr. Samuel Chen",
        title: "MA in Literature, Published Author",
        subject: "Literature",
        masteryLevel: "King",
        philosophy: "Every essay is a strategic argument. I guide students to build their points with logic, evidence, and eloquent prose.",
        qualifications: ["MA in Literature", "Shakespearean Expert", "Creative Writing", "SAT Prep"],
        image: "https://placehold.co/400x400.png",
        availability: "Tues, Thurs afternoons",
        rating: 4.8,
        hourlyRate: 75,
        bio: "Samuel Chen is a published author and literature expert who views writing and analysis as a tactical exercise. With a Master's degree and extensive experience in preparing students for standardized tests, he focuses on developing critical thinking and argumentative skills. His sessions are designed to help students construct compelling narratives and deconstruct complex texts with precision."
    },
    {
        id: "ms-anita-joshi",
        name: "Ms. Anita Joshi",
        title: "BSc in Mathematics, Certified Educator",
        subject: "Mathematics",
        masteryLevel: "Knight",
        philosophy: "Mathematics is not just about finding the right answer, but about finding the most elegant and efficient path to it.",
        qualifications: ["BSc in Mathematics", "Calculus I & II", "Algebra", "Geometry"],
        image: "https://placehold.co/400x400.png",
        availability: "Weekends",
        rating: 4.9,
        hourlyRate: 60,
        bio: "Anita Joshi is a passionate mathematics educator who makes numbers come alive. She specializes in foundational to intermediate math, including algebra, geometry, and calculus. Her teaching style is energetic and focused on building a strong conceptual framework, enabling students to approach problems from multiple strategic angles. She is known for her patience and ability to adapt to different learning styles."
    },
    {
        id: "prof-marcus-thorne",
        name: "Prof. Marcus Thorne",
        title: "Professor of History, 20 Years at University",
        subject: "History",
        masteryLevel: "Queen",
        philosophy: "History is a chessboard of human decisions. We study the past to understand the strategies that shape our present.",
        qualifications: ["PhD in History", "World History", "Military Strategy", "Political Science"],
        image: "https://placehold.co/400x400.png",
        availability: "Flexible weekdays",
        rating: 5.0,
        hourlyRate: 90,
        bio: "Professor Marcus Thorne brings two decades of university-level teaching to the platform. He is an expert in world history and political science, with a unique focus on historical strategy. His lessons are not mere recitations of facts but deep dives into the cause-and-effect of major historical events. He challenges students to think critically about the past to better navigate the future."
    },
];
