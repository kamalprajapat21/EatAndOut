export interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  image: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review: "Absolutely love this place! The ambience is cozy and perfect for catching up with friends. The cappuccino is the best I've had in Kota. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    review: "Great food, great service! The pizza here is amazing, and the staff is very friendly. Perfect spot for a date night. Will definitely come back!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    date: "2024-01-10",
  },
  {
    id: 3,
    name: "Ananya Patel",
    rating: 5,
    review: "The cold coffee and chocolate brownie combo is to die for! Such a beautiful cafe with Instagram-worthy interiors. My favorite hangout spot in Mahaveer Nagar.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    date: "2024-01-08",
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 4,
    review: "Good food quality and reasonable prices. The chicken burger was delicious. Only suggestion would be to improve parking space. Otherwise, excellent!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    date: "2024-01-05",
  },
  {
    id: 5,
    name: "Sneha Gupta",
    rating: 5,
    review: "As a student, I love studying here. Free WiFi, comfortable seating, and amazing coffee. The staff is super friendly and the place is always clean. Perfect!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    date: "2024-01-03",
  },
  {
    id: 6,
    name: "Amit Kumar",
    rating: 5,
    review: "Celebrated my birthday here and the staff made it so special! The food was excellent and they even surprised us with a complimentary dessert. Thank you!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    date: "2023-12-28",
  },
];
