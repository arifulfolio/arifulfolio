import { PricingPlan } from "../types";

export const pricingPlans: PricingPlan[] = [
  {
    id: 1, name: "Basic Plan", price: "$19.95", period: "/per month", description: "Perfect for individuals and small startups.",
    features: ["Website Design", "Mobile Apps Design", "Product Design", "Digital Marketing", "Custom Support"],
    buttonText: "View Plan Details"
  },
  {
    id: 2, name: "Standard Plan", price: "$39.95", period: "/per month", description: "Best for growing businesses and agencies.",
    features: ["Website Design", "Mobile Apps Design", "Product Design", "Digital Marketing", "Custom Support", "SEO Optimization", "Source Files"],
    isPopular: true,
    buttonText: "View Plan Details"
  },
  {
    id: 3, name: "Premium Plan", price: "$69.95", period: "/per month", description: "For large enterprises requiring full service.",
    features: ["Website Design", "Mobile Apps Design", "Product Design", "Digital Marketing", "Custom Support", "SEO Optimization", "Source Files", "24/7 Priority Support", "Unlimited Revisions"],
    buttonText: "View Plan Details"
  }
];

export const faqs = [
   { id: 1, q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time." },
   { id: 2, q: "Is there a long-term contract?", a: "No, our plans are month-to-month. You can cancel anytime." },
   { id: 3, q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers." },
   { id: 4, q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee if you are not satisfied." },
];