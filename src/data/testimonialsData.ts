export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Wedding Client",
    content: "Savory Delights made our wedding day absolutely perfect. The food was outstanding and the service was impeccable. Our guests are still talking about the incredible meal!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Corporate Event Coordinator",
    content: "We've used Savory Delights for multiple corporate events and they never disappoint. Professional, reliable, and the food quality is consistently excellent.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Private Party Host",
    content: "The team went above and beyond for my anniversary celebration. Every detail was perfect and the presentation was absolutely beautiful. Highly recommended!",
    rating: 5
  }
];