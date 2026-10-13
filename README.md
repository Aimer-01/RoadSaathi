# RoadSaathi Prototype

RoadSaathi is a mobile-first, WhatsApp-first roadside assistance coordination prototype for Pune, Maharashtra. It demonstrates separate customer, service-partner, and admin/dispatch experiences with realistic Indian demo data.

## Setup

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Create a production bundle with `npm run build`.
4. Open `/admin` for dispatch, `/partner/login` for the partner portal, or `/request` for the customer flow.

Demo login rules:

- Customer OTP: enter any valid 10-digit phone number, then any 6 digits.
- Partner login: enter any 10-digit phone number.
- Admin login: enter any non-empty access code.

## Architecture

- `src/App.tsx`: lightweight client-side routing, page layouts, forms, dashboards, dialogs, toasts, and interactive prototype state.
- `src/config.ts`: the single source of truth for pilot zone and editable support contact details.
- `src/translations.ts`: English and Hindi interface copy and language types. Add Marathi, Gujarati, Tamil, Telugu, Kannada, or Bengali dictionaries here.
- `src/data/mockData.ts`: typed service categories, partners, requests, statuses, Pune areas, and partner categories.
- `src/index.css`: Tailwind CSS v4 theme tokens, shared focus styling, animation, and typography.
- Browser `localStorage`: language preference, customer request, mock login state, and partner application state.

The app deliberately uses a small internal history router to keep the prototype dependency-light. Replace it with React Router when route-level data loading, nested routing, and production authentication are introduced.

## Mock Data Model

The current typed data layer represents or anticipates these entities:

- `customers`: contact profile, consent, preferred communication, favourites.
- `vehicles`: owner, type, make/model, fuel type, registration.
- `requests`: category, vehicle, location, urgency, selected partner, current status.
- `serviceCategories`: requirements, description, base estimate, vehicle/skill constraints.
- `partners`: category, service area, distance, capabilities, rating, EV skill and contact.
- `availability`: available, busy, offline, paused, and working hours.
- `locations`: customer pickup point, saved labels, service areas and map coordinates.
- `estimates`: coordination fee, travel, parts exclusions, tax and approved final charge.
- `payouts`: partner payout, coordination fee, payment status and invoice reference.
- `ratings`: request, customer score, comments and moderation state.
- `supportTickets`: type, priority, ownership, messages and resolution.
- `statusEvents`: timestamped request and partner-job timeline events.

## Connecting Supabase And Real APIs

1. Create Supabase tables for the entities above and enable Row Level Security.
2. Replace arrays in `src/data/mockData.ts` with repository functions that read and write Supabase.
3. Replace localStorage login flags with Supabase phone authentication and verified role claims for customer, partner and dispatcher access.
4. Store uploaded problem photos, partner documents and completion proof in private Supabase Storage buckets with signed URLs.
5. Persist every request transition as a `status_events` row and subscribe to request and partner availability updates with Supabase Realtime.
6. Move matching, estimate calculation, manual assignment and payout computation to server-side functions. Never trust browser-calculated prices.
7. Connect an approved maps provider for geocoding, route distance and navigation. Keep manual location entry as a fallback.
8. Connect an approved WhatsApp Business provider and transactional SMS provider. Store message consent and delivery status.
9. Add payment processing only after legal, tax, cancellation, reconciliation and partner-payout flows are reviewed.
10. Keep fuel requests restricted to authorised/compliant partners and route high-voltage EV work only to certified or authorised EV technicians.

All current requests, metrics, partners, prices, ratings and payouts are demo data. The prototype makes no claim of nationwide coverage, existing customers, completed pilot results, verified market size or profitability.