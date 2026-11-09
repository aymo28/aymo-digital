# Aymo Digital client-trust and AI audit upgrade

## Client-view findings

A prospective client needs five answers quickly: **Can you solve my problem? Have you done it before? What exactly will happen? What will it cost or require? Can I reach a real person?**

The current site already gives clear services, dedicated service pages, directors, a team, a simple process, contact options, mobile actions, and visible reporting. The main trust blockers are:

- Sample client names, testimonials, project counts, ROI and revenue figures look like claims even when they are only layout examples.
- The first screen explains the agency but does not give the visitor an immediate result or reason to start now.
- Reporting visuals are strong, but clients also need plain-language deliverables, ownership of their accounts/data, approval points, and what happens in the first 30 days.
- The “free audit” currently behaves like a lead form, not a real website analysis.
- Mobile uses a large separate image panel; the opening can feel long before the visitor reaches useful content.

## What will be built

### 1. Clearer, more useful first screen

- Keep the existing desktop visual direction and dashboard composition.
- Refine the headline so it reads naturally: “Grow your business with Aymo Digital” with one rotating benefit line beneath it.
- Keep the supporting sentence and service/work actions, but reduce unnecessary vertical space on phones.
- On mobile only, place the existing agency photo behind the first screen at roughly 35% visibility with a readable light overlay; keep the lower dashboard cards compact rather than overlapping.
- Add a prominent website URL audit box to the first screen with an example URL, validation, loading state, and a clear “Audit my website” action.

### 2. Real website audit, not a random score

The audit will run securely on the server and use a recognized website performance audit as its evidence source. It will return:

- Overall score out of 100.
- Performance, SEO, accessibility, and best-practice scores.
- Key measurements such as loading speed, layout stability, mobile usability signals, metadata, crawl/index signals, and common technical issues when available.
- “What is working”, “What is costing you leads”, and “Fix these first” sections.
- Three priority levels with clear non-technical explanations.
- AI-written recommendations grounded only in the measured results, with no invented traffic, ranking, revenue, or competitor claims.
- Graceful messages for blocked sites, invalid URLs, timeouts, rate limits, and sites the audit provider cannot inspect.
- A result action to request a quotation or discuss the findings on WhatsApp.

### 3. Secure and dependable processing

- Validate and normalize URLs on both the page and server; allow only public `http`/`https` websites.
- Reject localhost, private/internal network addresses, credentials in URLs, oversized input, and unsafe redirects.
- Apply strict timeouts and response-size limits.
- Cache recent results by normalized URL so repeated audits are faster and do not waste AI usage.
- Store only the normalized public URL, scores, report, and timestamps; no login is required and no personal details are collected by the audit box.
- Keep deterministic measured scores separate from AI recommendations so AI can never alter the evidence.

### 4. Trust and conversion polish

- Replace unverified sample statistics/testimonials with clearly labelled preview content or evidence-based process promises; never present made-up results as real.
- Add a compact “What you get in the first 30 days” section: review, priorities, launch plan, tracking, and first report.
- Add a “Your accounts stay yours” trust strip covering account ownership, clear approvals, direct director access, transparent reporting, and no hidden lock-in.
- Improve the proof area to request real case-study inputs instead of claiming unsupported client outcomes.
- Make every section answer one client question in simple language and lead to one obvious next action.
- Preserve the existing services, directors, team, blog, contact details, routes, mobile action bar, and visual theme.

### 5. Responsive and accessible behavior

- Verify the first screen, audit form, loading state, report, buttons, cards, and fixed mobile action bar at 320, 390, 430, 768, and desktop widths.
- Ensure no overlap or horizontal scrolling, readable image contrast, large touch targets, keyboard access, screen-reader labels, and reduced-motion behavior.
- Keep the mobile audit result easy to scan with stacked score cards and collapsible details.

## Technical details

- Use a TanStack Start server function for the audit; browser code never calls the audit or AI services directly.
- Use Zod for matching client/server validation.
- Use Google PageSpeed Insights/Lighthouse data for objective scores and Lovable AI Gateway for the plain-language report; no user API key is required.
- Add a private `website_audits` cache table in Lovable Cloud with service-only access, explicit grants, RLS enabled, and no anonymous data policies.
- Add the audit UI as focused homepage components rather than expanding the existing large homepage file further.
- Update homepage metadata to mention the free AI website audit.

## Verification

- Test a valid public site, invalid URL, localhost/private address, unreachable domain, and repeated URL cache path.
- Confirm AI recommendations match the measured evidence and failures never produce a fake score.
- Check the complete homepage and audit result visually on mobile and desktop with no console or build errors.

## Needed later for maximum trust

The structure can be completed now. Real client logos, testimonials, case-study screenshots, ad-account figures, and certifications must come from Aymo Digital before they can be presented as verified proof.
