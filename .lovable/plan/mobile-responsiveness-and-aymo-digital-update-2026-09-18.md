# Mobile responsiveness and Aymo Digital update

## Scope
- Keep the current desktop appearance unchanged from the desktop breakpoint upward.
- Rework mobile-only layouts so the hero dashboard and every card stay inside the viewport without overlap.
- Rename the brand everywhere from Al Tawakkal to Aymo Digital, including page titles and footer details.
- Make the hero message explicit: “Grow your business with Aymo Digital advanced marketing,” with a stable animated emphasis that stays readable on small screens.
- Add a lightweight horizontal marquee using CSS animation, with reduced-motion support.
- Restyle service cards as Instagram-style post cards and add functional Like, Comment, and Save controls with accessible pressed states.

## Mobile pass
- Test the homepage and all four secondary pages at narrow phone widths.
- Fix wrapping, spacing, card heights, dashboard positioning, forms, navigation, ecosystem, charts, CTA groups, and footer stacking only where mobile needs it.
- Verify there is no horizontal scrolling, clipping, collision, or unreadable text.

## Technical details
- Use mobile-specific CSS and preserve existing desktop rules at `sm`/`md`/`lg` breakpoints.
- Keep interactions local to the page: Like and Save toggle; Comment reveals an inline input and count.
- Respect keyboard focus and reduced-motion preferences.
