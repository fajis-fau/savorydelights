export interface MenuItem {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const menuItems: MenuItem[] = [
  {
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Gourmet Appetizer Platter",
    description: "An elegant selection of artisanal cheeses, cured meats, fresh fruits, and gourmet crackers beautifully arranged.",
    price: "Starting at $85"
  },
  {
    image: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Herb-Crusted Salmon",
    description: "Fresh Atlantic salmon with a delicate herb crust, served with seasonal vegetables and lemon butter sauce.",
    price: "Starting at $32 per person"
  },
  {
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Premium Beef Tenderloin",
    description: "Perfectly seasoned and slow-roasted beef tenderloin with roasted vegetables and red wine reduction.",
    price: "Starting at $45 per person"
  },
  {
    image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Vegetarian Delight",
    description: "Colorful array of grilled vegetables, quinoa salad, and plant-based protein options for health-conscious guests.",
    price: "Starting at $28 per person"
  },
  {
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Decadent Dessert Station",
    description: "An assortment of handcrafted desserts including chocolate truffles, fruit tarts, and artisanal pastries.",
    price: "Starting at $15 per person"
  },
  {
    image: "https://images.pexels.com/photos/544969/pexels-photo-544969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Signature Cocktails",
    description: "Professionally crafted cocktails and beverages to complement your event with premium spirits and fresh ingredients.",
    price: "Starting at $12 per drink"
  }
];