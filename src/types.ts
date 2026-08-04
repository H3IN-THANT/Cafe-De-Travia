export type CategoryType = 'All' | 'Coffee' | 'Bread' | 'Pastries';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Bread' | 'Pastries';
  price: number; // in MMK
  priceFormatted: string;
  description: string;
  image: string;
  badge?: string;
  dietary?: string[]; // e.g. 'Vegetarian', 'Organic', 'House Blend'
  isHotOrCold?: boolean;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
  selectedTemp?: 'Hot' | 'Iced';
}

export interface CafeInfo {
  name: string;
  tagline: string;
  address: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  phone: string;
  instagram: string;
  facebook: string;
  googleMapsUrl: string;
}
