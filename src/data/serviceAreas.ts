/**
 * Verified Service Delivery Areas for Nitish Tiffin Service
 * Local confirmed area served within Chamba, Himachal Pradesh
 */

export interface ServiceArea {
  id: string;
  name: string;
  landmark: string;
  deliveryTime: string;
  note: string;
}

export const VERIFIED_SERVICE_AREAS: ServiceArea[] = [
  {
    id: "surara-mohalla",
    name: "Surara Mohalla",
    landmark: "Surara mohalla and nearby residential lanes",
    deliveryTime: "Lunch: ~1:00 PM • Dinner: ~7:45 PM",
    note: "Fresh doorstep meal delivery for daily orders and regular monthly plan subscribers in Chamba.",
  },
];

export const SERVICE_AREA_POLICY = {
  generalNotice:
    "We provide fresh home-cooked meal delivery in Chamba. If your residence or workplace is situated slightly beyond Surara Mohalla, please message us on WhatsApp with your location pin so we can confirm delivery convenience.",
  lunchWindow: "Delivered fresh around 1:00 PM daily",
  dinnerWindow: "Delivered warm by around 7:45 PM daily",
};
