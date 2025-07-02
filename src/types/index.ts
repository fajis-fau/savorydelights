export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  message: string;
}

export interface ServiceFeature {
  icon: React.ComponentType;
  title: string;
  description: string;
  features: string[];
}

export interface ContactInfo {
  icon: React.ComponentType;
  label: string;
  value: string;
}