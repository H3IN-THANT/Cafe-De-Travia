import { MenuItem, CafeInfo } from '../types';

export const CAFE_INFO: CafeInfo = {
  name: "Café De Travia",
  tagline: "Handcrafted bread, delicate pastries, and comforting coffee made fresh every day.",
  address: "19th Street, between 57th Street, Mandalay",
  hours: {
    weekday: "Monday–Friday: 8:00 AM–9:00 PM",
    weekend: "Saturday–Sunday: 8:00 AM–10:00 PM"
  },
  phone: "+959 763749800",
  instagram: "https://instagram.com/cafedetravia",
  facebook: "https://facebook.com/cafedetravia",
  googleMapsUrl: "https://maps.google.com/?q=19th+Street+between+57th+Street+Mandalay"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Café Latte",
    category: "Coffee",
    price: 7499,
    priceFormatted: "7,499 MMK",
    description: "Smooth espresso with creamy steamed milk.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    dietary: ["House Espresso", "Whole/Oat Milk"],
    isHotOrCold: true
  },
  {
    id: "m2",
    name: "Iced Caramel Coffee",
    category: "Coffee",
    price: 7999,
    priceFormatted: "7,999 MMK",
    description: "Chilled coffee with milk and caramel.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    badge: "Refreshing",
    dietary: ["House Syrup"],
    isHotOrCold: false
  },
  {
    id: "m3",
    name: "Classic Sourdough",
    category: "Bread",
    price: 9499,
    priceFormatted: "9,499 MMK",
    description: "Naturally fermented bread with a crisp crust.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    badge: "Artisan",
    dietary: ["Vegan", "Wild Yeast"]
  },
  {
    id: "m4",
    name: "Garlic Herb Loaf",
    category: "Bread",
    price: 11500,
    priceFormatted: "11,500 MMK",
    description: "Soft artisan bread with garlic and herbs.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    badge: "Chef's Special",
    dietary: ["Fresh Herbs", "Real Butter"]
  },
  {
    id: "m5",
    name: "Butter Croissant",
    category: "Pastries",
    price: 7499,
    priceFormatted: "7,499 MMK",
    description: "Flaky, buttery, and freshly baked.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    badge: "Morning Favorite",
    dietary: ["French Butter", "Layered Flaky"]
  },
  {
    id: "m6",
    name: "Chocolate Danish",
    category: "Pastries",
    price: 9900,
    priceFormatted: "9,900 MMK",
    description: "Layered pastry filled with rich chocolate.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    badge: "Sweet Treat",
    dietary: ["Dark Chocolate", "70% Cocoa"]
  },
  {
    id: "m7",
    name: "Kyoto Matcha Latte",
    category: "Coffee",
    price: 8499,
    priceFormatted: "8,499 MMK",
    description: "Ceremonial grade matcha whisked with warm textured milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    badge: "Signature",
    dietary: ["Ceremonial Matcha"],
    isHotOrCold: true
  },
  {
    id: "m8",
    name: "Almond Frangipane Croissant",
    category: "Pastries",
    price: 8999,
    priceFormatted: "8,900 MMK",
    description: "Double-baked croissant loaded with rich almond cream and toasted flakes.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    dietary: ["Real Almonds"]
  }
];

export const DAILY_SPECIAL: MenuItem = {
  id: "ds1",
  name: "Strawberry Cream Croissant",
  category: "Pastries",
  price: 7999,
  priceFormatted: "7,999 MMK",
  description: "Flaky croissant filled with fresh strawberry cream and finished with powdered sugar.",
  image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=80",
  badge: "Limited Batch",
  dietary: ["Fresh Strawberries", "House Made Cream"]
};
