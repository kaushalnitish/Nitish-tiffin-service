/**
 * Frequently Asked Questions for Nitish Tiffin Service
 * Grounded strictly in real business offerings in Chamba, Himachal Pradesh
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: "Ordering & Delivery" | "Plans & Pricing" | "Food & Quality";
}

export const FAQS: FAQItem[] = [
  {
    question: "What does Nitish Tiffin Service provide in Chamba?",
    answer:
      "We provide simple, wholesome home-cooked meals (ghar jaisa khana) for lunch and dinner in Chamba, Himachal Pradesh. Our food is cooked with the same ingredients and taste that our own family eats, using fresh local vegetables from Chamba market.",
    category: "Food & Quality",
  },
  {
    question: "What are your delivery timings for lunch and dinner?",
    answer:
      "Lunch is freshly cooked and delivered around 1:00 PM. Dinner is delivered warm by around 7:45 PM. Timings are planned to fit regular work and family meal hours across Chamba.",
    category: "Ordering & Delivery",
  },
  {
    question: "How much does a tiffin meal cost?",
    answer:
      "A Single Meal is ₹70 (ideal for trying our food). Daily Lunch + Dinner is ₹140 per day. For regular subscribers, our Monthly Plan is ₹4,000 per month (both lunch and dinner daily, coming to approx ₹66 per meal). We also accommodate occasional orders at ₹100 per meal.",
    category: "Plans & Pricing",
  },
  {
    question: "What does a typical home-cooked meal include?",
    answer:
      "A typical meal includes fresh handmade phulka rotis (chapati), a bowl of dal tadka, freshly cooked seasonal vegetable sabzi, steamed rice, and salad. The menu changes regularly depending on what fresh vegetables are in season in the local market.",
    category: "Food & Quality",
  },
  {
    question: "Can I try a single meal before committing to a monthly plan?",
    answer:
      "Yes, absolutely. We encourage new customers in Chamba to try a single trial meal for ₹70. There is no advance payment required for a trial meal — you can pay cash or UPI upon delivery.",
    category: "Plans & Pricing",
  },
  {
    question: "Which areas in Chamba do you deliver to?",
    answer:
      "We deliver across Chamba town, with confirmed regular doorstep delivery in Surara Mohalla and nearby central residential and workplace points. If you are located slightly further out, message us on WhatsApp with your location to confirm delivery feasibility.",
    category: "Ordering & Delivery",
  },
  {
    question: "How do I place an order or inquire about today's menu?",
    answer:
      "You can place an order directly by clicking 'Order on WhatsApp' or calling us at 9816402487 or 8219975823. You can also ask what special seasonal vegetables are being prepared today.",
    category: "Ordering & Delivery",
  },
  {
    question: "Can I pause or adjust meals during travel or leave?",
    answer:
      "Yes. For monthly plan subscribers, if you are traveling or need to skip a meal, simply notify us in advance on WhatsApp before the cooking preparation begins (by 10:30 AM for lunch or 5:30 PM for dinner).",
    category: "Plans & Pricing",
  },
];
