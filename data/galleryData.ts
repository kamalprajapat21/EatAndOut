export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    alt: "Cafe Interior",
    category: "Interior",
    height: 300,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    alt: "Fresh Coffee",
    category: "Coffee",
    height: 400,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
    alt: "Delicious Burger",
    category: "Food",
    height: 350,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    alt: "Restaurant Ambience",
    category: "Restaurant",
    height: 300,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    alt: "Tasty Dessert",
    category: "Desserts",
    height: 400,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
    alt: "Friends Enjoying",
    category: "Friends",
    height: 350,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
    alt: "Latte Art",
    category: "Coffee",
    height: 300,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    alt: "Italian Pizza",
    category: "Food",
    height: 400,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800",
    alt: "Cozy Interior",
    category: "Interior",
    height: 350,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    alt: "Chocolate Cake",
    category: "Desserts",
    height: 300,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
    alt: "Espresso Shot",
    category: "Coffee",
    height: 400,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    alt: "Happy Friends",
    category: "Friends",
    height: 350,
  },
];

export const galleryCategories = [
  "All",
  "Restaurant",
  "Coffee",
  "Food",
  "Interior",
  "Desserts",
  "Friends",
];
