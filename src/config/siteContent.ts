/**
 * Central Configuration for Nitish Tiffin Service
 * All business information, pricing, delivery timings, today's menu,
 * and contact details are stored here for simple 1-place updates.
 */

import tiffinMealPhoto from '../assets/images/homestyle_tiffin_fresh_ingredients_1790281183170.jpg';
import indianKitchenPhoto from '../assets/images/indian_home_kitchen_cooking_1790283021536.jpg';

export const CONTACTS = {
  phone1: {
    number: "9816402487",
    display: "9816402487",
    tel: "tel:+919816402487",
    wa: "https://wa.me/919816402487",
    waRaw: "919816402487",
  },
  phone2: {
    number: "8219975823",
    display: "8219975823",
    tel: "tel:+918219975823",
    wa: "https://wa.me/918219975823",
    waRaw: "918219975823",
  },
};

export const BUSINESS = {
  name: "Nitish Tiffin Service",
  tagline: "Simple Food. Like We Eat at Home.",
  subtext: "We serve the same quality and taste of home-cooked food that our own family eats.",
  location: "Chamba, Himachal Pradesh",
  primaryPhone: CONTACTS.phone1.number,
  secondaryPhone: CONTACTS.phone2.number,
  primaryWa: CONTACTS.phone1.wa,
  secondaryWa: CONTACTS.phone2.wa,
};

export const PRICING = {
  singleMeal: {
    title: "Single Meal",
    price: 70,
    unit: "",
    description: "One lunch or one dinner.",
    note: "Perfect for trying our food before taking a plan.",
    cta: "Order Now",
  },
  lunchDinnerDaily: {
    title: "Lunch + Dinner",
    price: 140,
    unit: "/ day",
    description: "Both lunch and dinner.",
    note: "Lunch around 1:00 PM and dinner by around 7:45 PM.",
    cta: "Order Now",
  },
  monthly: {
    title: "Monthly Plan",
    price: 4000,
    unit: "/ month",
    description: "Lunch + dinner monthly package.",
    note: "Complete everyday home meals for the entire month (≈ ₹66/meal).",
    cta: "Get Monthly Plan",
  },
  occasional: {
    title: "Occasional Meal",
    price: 100,
    unit: "/ meal",
    description: "For customers who want a meal only sometimes without taking a regular plan.",
    note: "Order when you need without any subscription commitment.",
    cta: "Order Now",
  },
};

export const DELIVERY = {
  heading: "When We Deliver",
  lunch: "Around 1:00 PM",
  dinner: "By around 7:45 PM",
  note: "Freshly prepared daily in Chamba and delivered warm to your doorstep or workplace.",
};

export const ABOUT = {
  title: "About Nitish Tiffin Service",
  p1: "Most of the food we make is the kind of food we eat at home. We started Nitish Tiffin Service to provide the same simple home-cooked food to people who need a regular lunch or dinner.",
  p2: "Our meals are prepared according to the season and the vegetables available in the local market. The menu changes regularly instead of following a fixed menu.",
  p3: "We currently provide lunch and dinner.",
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  about: indianKitchenPhoto,
  todaysMeal: tiffinMealPhoto,
};
