export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSpecial?: boolean;
  isVeg?: boolean;
}

export const menuData: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: "Cappuccino",
    description: "Classic Italian coffee with steamed milk foam",
    price: 120,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500",
    isVeg: true,
  },
  {
    id: 2,
    name: "Caffe Latte",
    description: "Smooth espresso with velvety steamed milk",
    price: 130,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=500",
    isVeg: true,
  },
  {
    id: 3,
    name: "Cold Coffee",
    description: "Refreshing iced coffee with ice cream",
    price: 140,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500",
    isVeg: true,
    isSpecial: true,
  },
  {
    id: 4,
    name: "Espresso",
    description: "Strong and bold Italian coffee shot",
    price: 100,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500",
    isVeg: true,
  },

  // Tea
  {
    id: 5,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea",
    price: 40,
    category: "Tea",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500",
    isVeg: true,
  },
  {
    id: 6,
    name: "Green Tea",
    description: "Healthy and refreshing green tea",
    price: 60,
    category: "Tea",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
    isVeg: true,
  },
  {
    id: 7,
    name: "Lemon Tea",
    description: "Zesty tea with fresh lemon",
    price: 50,
    category: "Tea",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500",
    isVeg: true,
  },

  // Pizza
  {
    id: 8,
    name: "Margherita Pizza",
    description: "Classic pizza with mozzarella and basil",
    price: 220,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
    isVeg: true,
    isSpecial: true,
  },
  {
    id: 9,
    name: "Pepperoni Pizza",
    description: "Loaded with pepperoni and cheese",
    price: 280,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
    isVeg: false,
  },
  {
    id: 10,
    name: "Veggie Supreme",
    description: "Fresh vegetables with herbs and cheese",
    price: 250,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=500",
    isVeg: true,
  },

  // Burgers
  {
    id: 11,
    name: "Classic Burger",
    description: "Juicy patty with lettuce, tomato, and cheese",
    price: 150,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    isVeg: false,
  },
  {
    id: 12,
    name: "Veg Burger",
    description: "Crispy veggie patty with special sauce",
    price: 130,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500",
    isVeg: true,
  },
  {
    id: 13,
    name: "Chicken Burger",
    description: "Grilled chicken with spicy mayo",
    price: 170,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500",
    isVeg: false,
    isSpecial: true,
  },

  // Sandwiches
  {
    id: 14,
    name: "Club Sandwich",
    description: "Triple-decker with chicken, bacon, and veggies",
    price: 180,
    category: "Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
    isVeg: false,
  },
  {
    id: 15,
    name: "Grilled Sandwich",
    description: "Toasted sandwich with cheese and veggies",
    price: 120,
    category: "Sandwich",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500",
    isVeg: true,
  },

  // Pasta
  {
    id: 16,
    name: "White Sauce Pasta",
    description: "Creamy pasta with herbs and cheese",
    price: 200,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
    isVeg: true,
  },
  {
    id: 17,
    name: "Red Sauce Pasta",
    description: "Tangy tomato-based pasta with veggies",
    price: 190,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=500",
    isVeg: true,
  },

  // Desserts
  {
    id: 18,
    name: "Chocolate Brownie",
    description: "Warm brownie with vanilla ice cream",
    price: 140,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500",
    isVeg: true,
  },
  {
    id: 19,
    name: "Cheesecake",
    description: "Rich and creamy New York style cheesecake",
    price: 160,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500",
    isVeg: true,
  },
  {
    id: 20,
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    price: 180,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
    isVeg: true,
  },

  // Mocktails
  {
    id: 21,
    name: "Virgin Mojito",
    description: "Refreshing mint and lime mocktail",
    price: 110,
    category: "Mocktails",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
    isVeg: true,
  },
  {
    id: 22,
    name: "Blue Lagoon",
    description: "Tropical blue curacao mocktail",
    price: 120,
    category: "Mocktails",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500",
    isVeg: true,
  },

  // Shakes
  {
    id: 23,
    name: "Chocolate Shake",
    description: "Thick and creamy chocolate shake",
    price: 130,
    category: "Shakes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    isVeg: true,
  },
  {
    id: 24,
    name: "Oreo Shake",
    description: "Cookies and cream shake with Oreo",
    price: 140,
    category: "Shakes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    isVeg: true,
  },

  // Wraps
  {
    id: 25,
    name: "Chicken Wrap",
    description: "Grilled chicken with veggies in tortilla",
    price: 160,
    category: "Wraps",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
    isVeg: false,
  },
  {
    id: 26,
    name: "Paneer Wrap",
    description: "Spicy paneer tikka wrap",
    price: 140,
    category: "Wraps",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500",
    isVeg: true,
  },
];

export const categories = [
  "All",
  "Coffee",
  "Tea",
  "Pizza",
  "Burger",
  "Sandwich",
  "Pasta",
  "Desserts",
  "Mocktails",
  "Shakes",
  "Wraps",
];

export const specialItems = menuData.filter((item) => item.isSpecial);
