import type { ComponentType } from "react";
import { BatteryCharging, Car, Fuel, KeyRound, Settings, ShieldCheck, Truck, Wrench, Zap } from "lucide-react";

export type ServiceCategory = {
  id: string;
  name: string;
  short: string;
  requirements: string;
  base: number;
  icon: ComponentType<{ className?: string }>;
};

export const serviceCategories: ServiceCategory[] = [
  { id: "puncture", name: "Puncture / Tyre", short: "Flat tyre repair or spare-wheel fitment.", requirements: "Tyre size, vehicle type, safe stopping space", base: 350, icon: Settings },
  { id: "battery", name: "Battery Jump-start", short: "Safe 12V battery testing and jump-start.", requirements: "Vehicle model and battery access", base: 450, icon: BatteryCharging },
  { id: "fuel", name: "Emergency Fuel", short: "Limited emergency fuel via authorised partners only.", requirements: "Fuel type, quantity and compliant access", base: 550, icon: Fuel },
  { id: "towing", name: "Towing", short: "Local flatbed or wheel-lift towing support.", requirements: "Vehicle condition and destination", base: 1200, icon: Truck },
  { id: "mechanical", name: "Minor Mechanical Breakdown", short: "On-road diagnosis and minor repair.", requirements: "Symptoms, photos and vehicle model", base: 650, icon: Wrench },
  { id: "lockout", name: "Key Lockout", short: "Vehicle access from a trained locksmith.", requirements: "ID and proof of ownership", base: 700, icon: KeyRound },
  { id: "fluids", name: "Coolant / Oil Emergency", short: "Leak check and emergency top-up support.", requirements: "Vehicle model and warning light details", base: 600, icon: Car },
  { id: "ev-tow", name: "EV Towing", short: "EV-compatible towing to a suitable facility.", requirements: "EV model, drive state and destination", base: 1500, icon: Truck },
  { id: "ev-station", name: "EV Charging-Station Support", short: "Help locating or reaching compatible charging.", requirements: "Connector type and remaining range", base: 500, icon: Zap },
  { id: "ev-12v", name: "EV 12V Auxiliary Battery", short: "Low-voltage auxiliary battery support only.", requirements: "EV model and dashboard symptoms", base: 650, icon: BatteryCharging },
  { id: "other", name: "Other", short: "Tell us what happened and we will guide you.", requirements: "Clear notes and a safe location", base: 500, icon: ShieldCheck },
];

export type Partner = {
  id: string; name: string; area: string; distance: number; eta: number; rating: number;
  capabilities: string[]; available: boolean; ev: boolean; phone: string;
};

export const partners: Partner[] = [
  { id: "p1", name: "Om Sai Auto Care", area: "Baner", distance: 2.4, eta: 18, rating: 4.8, capabilities: ["Puncture", "Battery", "Minor repair"], available: true, ev: false, phone: "+91 98XXX 42018" },
  { id: "p2", name: "Prakash Mobile Garage", area: "Wakad", distance: 3.1, eta: 24, rating: 4.7, capabilities: ["Puncture", "Towing", "Battery"], available: true, ev: true, phone: "+91 97XXX 11246" },
  { id: "p3", name: "Asha EV Assist", area: "Hinjewadi", distance: 4.6, eta: 29, rating: 4.9, capabilities: ["EV towing", "EV 12V", "Charging support"], available: true, ev: true, phone: "+91 90XXX 88102" },
  { id: "p4", name: "Sahyadri Towing", area: "Katraj", distance: 8.2, eta: 38, rating: 4.6, capabilities: ["Towing", "SUV support"], available: false, ev: true, phone: "+91 99XXX 61357" },
];

export const demoRequests = [
  { id: "RS-24081", customer: "Ananya Kulkarni", area: "Baner", category: "Puncture / Tyre", vehicle: "Car", priority: "Normal", partner: "Om Sai Auto Care", eta: "14 min", price: "₹350", status: "On the way", complaint: "None" },
  { id: "RS-24082", customer: "Rohan Mehta", area: "Wakad", category: "Battery Jump-start", vehicle: "Car", priority: "Urgent", partner: "Prakash Mobile Garage", eta: "8 min", price: "₹520", status: "Partner confirmed", complaint: "None" },
  { id: "RS-24083", customer: "Sana Shaikh", area: "Hinjewadi", category: "EV Charging Support", vehicle: "EV", priority: "Normal", partner: "Asha EV Assist", eta: "21 min", price: "₹680", status: "On the way", complaint: "None" },
  { id: "RS-24084", customer: "Vikram Joshi", area: "Talegaon", category: "Towing", vehicle: "Car", priority: "Unsafe", partner: "Unassigned", eta: "--", price: "₹1,450", status: "Searching", complaint: "Escalated" },
];

export const statusSteps = ["Request received", "Partner confirmed", "Partner on the way", "Partner arrived", "Service in progress", "Completed"];

export const puneAreas = ["Baner", "Wakad", "Hinjewadi", "Katraj", "Talegaon", "Lonavala", "Pune Station", "Viman Nagar"];

export const partnerCategories = ["Mechanic", "Puncture shop", "Towing operator", "Battery technician", "Authorised fuel partner", "Locksmith", "Auto-electrician", "EV technician"];