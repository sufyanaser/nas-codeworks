> **Status:** Supporting
> **Compatibility with Constitution v2:** Compatible — implementation specification derived from §11 Experience Architecture
> **Authority:** docs/00-authority/01_Project_Constitution_v2.md → docs/04-build/01_Website_UI_Build_Brief.md
> **Last reviewed:** 2026-06-23 (Constitution Migration Pass)

# NAS CodeWorks — Screen Engine Execution Prompt

> This is the **implementation specification** developers build from. It translates the Constitution
> (§11 Experience Architecture) and the UI / Build Brief into a concrete screen architecture,
> behaviors, motion map, components, state model, and integration boundaries.
>
> **It contains no code and no mockups.** It defines *what* to build and *how it must behave*, not
> the source. Where this document and the Constitution disagree, the **Constitution wins**.

---

## 0. Non-negotiables (inherited, do not change)

These are locked by Constitution §13 and must hold in every screen:

- **Three services only** — `$500` / `$900` / Automation **price undisclosed**. No pricing table.
- **CTA architecture** — primary `ابدأ بوصف المشكلة الحالية`, secondary `تعرّف على طريقة العمل`,
  submit `إرسال وصف المشكلة`, success `تم استلام وصف المشكلة، وسنراجعه لفهم الوضع الحالي.`
  Forbidden CTAs per §7.
- **Navigation labels** — الرئيسية · الخدمات · طريقة العمل · قصص المشاكل · ابدأ بوصف المشكلة. No
  Portfolio/Products/Software/Packages/Pricing.
- **Center > elements** — the NAS Core Symbol (Operational Center) is the strongest anchor on every
  screen; fragments (ملف، تقرير، رسالة، متابعة، موظف، ورق، أرقام) are lighter and secondary.
- **No global scroll** — the experience is a Screen Engine of discrete screens; no long page scroll.
- **Arabic-first / RTL**, approved copy used **verbatim** (distributed, never rewritten).
- **No Dashboard Hero, no product screenshots, no real software logos, no radio/media forms.**

---

## 1. Architecture overview

| Concept (Constitution §11) | Implementation meaning |
|---|---|
| Interactive Executive Presentation | The site is a guided, screen-based walk-through for an owner/manager. |
| Operational Center Experience | Every screen reinforces `Fragmented Signals → Operational Center → Clarity`. |
| Screen Engine | A controller owns one **active screen** at a time and orchestrates transitions. |
| No Global Scroll | The document never scrolls as a whole. Movement = deliberate screen/state change. |
| Desktop Renderer | A layout strategy optimized for large viewports (spatial, presentation feel). |
| Mobile Renderer | A **separate** layout strategy for small viewports (not a responsive reflow). |
| Hybrid Navigator | Top-level nav + screen-to-screen progression, unified in one navigation model. |
| Guided Diagnostic Flow | The Contact screen is a step-by-step diagnostic (Intake Workflow, §13). |
| Layered Interface | Each screen is composed of stacked layers, not stacked scroll sections. |
| NAS Core Symbol | The central brand mark = the Operational Center; visual heart of every screen. |

**Runtime stack (existing):** React 19, TypeScript, Vite 8, CSS Modules, react-helmet-async (SEO),
lucide-react (icons). **Add:** GSAP (timelines + Flip plugin) for the motion map. **Remove from the
mental model:** `react-router` page-per-URL scrolling — routes become **screen addresses** for the
Screen Engine (deep-linking is preserved; scrolling is not).

### Layer model (applies to every screen)

```
Layer 4 — Overlay / Panel layer   (Navigator, intake panels, modals)
Layer 3 — Foreground content       (headline, paragraph, cards, CTA)
Layer 2 — Operational Center layer (NAS Core Symbol, relationship paths)
Layer 1 — Fragment layer           (light fragment nodes, secondary)
Layer 0 — Base / background         (calm off-white surface, grid)
```

Center-over-elements is enforced structurally: the Operational Center sits on Layer 2 **above**
fragments on Layer 1, never the reverse.

---

## 2. Screen map

The Screen Engine has **six screens**. The Hybrid Navigator exposes the **five approved nav labels**;
Screen 02 is reached by progressing from Screen 01 (it is part of the Home narrative, not a sixth nav
label — this keeps the approved 5-item navigation intact).

| Screen | Address | Nav label | Source copy | Journey stage |
|---|---|---|---|---|
| **S01 — Operational Center (Home)** | `/` | الرئيسية | `02-copy/01_Home_Page_V3` (Hero, Recognition) | Problem tension |
| **S02 — The Missing Center** | `/center` | *(progression from S01)* | `01_Home_Page_V3` (Cost, Missing Center, Philosophy, Outcomes, Why) | Reframe + understanding |
| **S03 — Paths (Services)** | `/services` | الخدمات | `02_Services_Page_V2` | Suitable path |
| **S04 — Method (How We Work)** | `/how-we-work` | طريقة العمل | `03_How_We_Work_Page_V2` | Risk reduction / trust |
| **S05 — Problem Stories (Case Studies)** | `/stories` | قصص المشاكل | `05_Case_Studies_..._V2` | Recognition / trust |
| **S06 — Problem Discovery (Contact)** | `/start` | ابدأ بوصف المشكلة | `04_Contact_Problem_Discovery_V2` | Describe the problem |

**Canonical forward path:** S01 → S02 → S03 → S04 → S05 → S06. The Navigator may jump to any screen;
the Persistent CTA always routes to **S06**.

---

## 3. Per-screen specification

Each screen below defines: **Purpose · Layer stack · Desktop behavior · Mobile behavior · Motion ·
Components · State · Integration**. Approved copy is used verbatim; "distribute" means split into the
listed states without rewriting.

### Screen 01 — Operational Center (Home)

- **Purpose:** In the first 10–15 seconds make the owner feel "this team understands the mess inside
  my company." Establish the NAS Core Symbol as the hero.
- **Layer stack:** L2 NAS Core Symbol (dominant, Muted Teal, centered/leading); L1 fragment nodes with
  Arabic labels (ملف/تقرير/رسالة/متابعة/موظف/ورق/أرقام) drifting toward center; L2 relationship paths;
  L3 headline `عندما لا تعود تعرف أين يقف العمل داخل شركتك` + sub-paragraph + Primary/Secondary CTA.
- **States:** `1a Hero` → `1b Recognition` (Excel/WhatsApp/paper as daily examples — appear once,
  lightly, then yield back to the center).
- **Desktop:** Center symbol sits in the optical center / start-side of a wide canvas; fragments
  arranged radially; CTAs anchored bottom-start. No scroll — `1a→1b` is a state advance.
- **Mobile:** Center symbol top, reduced fragment count (max 5 visible), headline below, CTAs as a
  pinned bottom action bar. `1a→1b` advances via tap/swipe-up affordance, not page scroll.
- **Motion:** `M-HERO` (see §10). Center forms last / pulses once to assert dominance.
- **Components:** `OperationalCenterHero`, `NASCoreSymbol`, `FragmentNode`, `RelationshipPath`,
  `SectionHeading`, `CTAButton` (primary + secondary).
- **State:** reads `activeScreen`, `motionPreference`; local `heroState: '1a'|'1b'`.
- **Integration:** none.

### Screen 02 — The Missing Center

- **Purpose:** Shift the visitor from "I have too many scattered tools" to "no one sees the full
  picture." This is the emotional core (Constitution §4.1–§4.2).
- **Layer stack:** L1 fragments shown **without** connecting paths (current state); L2 an *empty*
  center slot; then a transition where L2 center forms and L2 paths connect — visualizing the missing
  center being restored.
- **States:** `2a Cost` (وقت ضائع، أخطاء، تأخير، رؤية غير واضحة) → `2b Missing Center`
  (المعلومات موجودة... لكنها لا تجتمع في مكان واحد) → `2c Philosophy` (لا نبدأ من التطبيق، نبدأ من
  المشكلة) → `2d Outcomes/Why` (عمل أقل، أخطاء أقل، وضوح؛ لماذا NAS CodeWorks).
- **Desktop:** Split canvas — fragments on one side, the forming center on the other; paths draw
  across on `2b`. State advance replaces content in place (no scroll).
- **Mobile:** One state per screen, vertical; the `MissingCenterBlock` renders fragments-then-center
  as a compact diagram; advance by tap.
- **Motion:** `M-CENTER-FORM` — paths draw in, empty center fills, fragments dim. Reduced-motion: show
  the connected end-state immediately.
- **Components:** `MissingCenterBlock`, `OutcomeCard`, `SimpleDiagramBlock`, `SectionHeading`,
  `CTAButton`.
- **State:** local `centerState: '2a'|'2b'|'2c'|'2d'`.
- **Integration:** none. Exit hands off to S03 (paths).

### Screen 03 — Paths (Services)

- **Purpose:** Present the three services as **paths chosen by problem type**, never as a catalog.
- **Layer stack:** L3 three `ServicePathCard`s (Problem → Daily pain → Service path → Outcome →
  light CTA); L2 a small persistent center motif tying paths back to the Operational Center.
- **States:** `3a Framing` (قد لا تحتاج برنامجاً جديداً) → `3b Paths` (three cards) → optional
  `3c How we choose` (نحدد المسار بعد فهم المشكلة).
- **Desktop:** Three cards in a calm RTL row; each card expands in place to reveal its outcome list.
- **Mobile:** Cards stacked one-per-view in a horizontal pager (swipe between paths), not a long
  scroll.
- **Pricing rule (enforced):** Card 1 `يبدأ من $500`; Card 2 `يبدأ من $900`; Card 3 shows
  `يُحدد بعد فهم مصادر البيانات ونطاق التقارير المطلوبة` — **no number**.
- **Motion:** `M-CARD-REVEAL`. No SaaS comparison animations.
- **Components:** `ServicePathCard`, `ProblemCard`, `OutcomeCard`, `SectionHeading`, `CTAButton`.
- **State:** local `expandedPath: 0|1|2|null`.
- **Integration:** **CMS (read)** — service path copy/outcomes MAY be CMS-managed (see §14); prices
  are config-locked, not freely editable.

### Screen 04 — Method (How We Work)

- **Purpose:** Risk reduction. Present an 8-step **diagnostic**, not a software lifecycle.
- **Layer stack:** L3 a horizontal/stepped `ProcessStep` track, each step posing an operational
  question; L2 center motif persists.
- **Steps (verbatim source order):** 1 نقطة التعطيل غير واضحة · 2 نفهم المشكلة · 3 نفهم طريقة العمل
  الحالية · 4 نحدد مصدر الألم · 5 نحدد النطاق · 6 نختار المسار · 7 نبني الحل · 8 نتحقق من النتيجة.
- **Desktop:** Stepper laid out as a path (RTL, right→left progression); selecting a node swaps the
  detail panel in place.
- **Mobile:** One step per view, advance with next/prev; progress indicator dots.
- **Forbidden:** icons/labels for code, databases, APIs, analysis/design/programming/testing phases.
- **Motion:** `M-STEP-ADVANCE` — path segment draws to the next node.
- **Components:** `ProcessStep`, `ProcessTrack`, `SectionHeading`, `CTAButton`.
- **State:** local `activeStep: 1..8`.
- **Integration:** none.

### Screen 05 — Problem Stories (Case Studies)

- **Purpose:** Problem recognition through stories — **not** a portfolio.
- **Layer stack:** L3 `CaseStoryCard` teasers (Problem → Previous state → Impact → Path → Outcome);
  an "under preparation" (قيد الإعداد) empty-state until real stories exist.
- **States:** `5a Familiar roots` → `5b Story teasers` → `5c What a story proves`.
- **Desktop:** Teasers in a calm grid; each opens an in-place story panel (Layer 4), never a gallery.
- **Mobile:** Vertical teaser list with one-per-view detail panels.
- **Forbidden:** project grid, screenshot gallery, "our work", portfolio cards, UI mockups as the
  entry point, project name as the headline.
- **Motion:** `M-STORY-OPEN` (panel rise, Layer 4).
- **Components:** `CaseStoryCard`, `StoryPanel`, `EmptyState`, `SectionHeading`, `CTAButton`.
- **State:** local `openStory: id|null`.
- **Integration:** **CMS (read)** — case stories are CMS content (§14). When none published, render
  the approved "قصص قيد الإعداد" empty-state.

### Screen 06 — Problem Discovery (Contact)

- **Purpose:** Collect a description of the operational problem via the **Guided Diagnostic Flow** —
  the visitor must not feel they are requesting a project.
- **Layer stack:** L4 the diagnostic flow panel (multi-step); L2 a calm center motif; L3 reassurance
  microcopy (لا تحتاج معرفة تقنية / هذه ليست طلب عرض سعر).
- **Steps:** the 12 approved fields, grouped into the Intake Workflow (§13).
- **Desktop:** Two-pane — left/leading: current diagnostic step; trailing: progress + "what happens
  next." Step changes swap in place; **local scroll allowed only inside a long step** (§11.4).
- **Mobile:** One field-group per view; sticky `إرسال وصف المشكلة` revealed on the final step.
- **Submit / Success / Error:** exactly the approved strings (§0). WhatsApp fallback link present.
- **Forbidden in form:** budget, app type, platform, page count, features, technology, database,
  integrations, "request a quote".
- **Motion:** `M-STEP-FORM` (gentle slide between steps); success state `M-SUCCESS` (center
  "completes" once).
- **Components:** `GuidedDiagnosticFlow`, `ContactForm` (refactored to stepped), `DiagnosticStep`,
  `FormField`, `ProgressRail`, `CTAButton`, `WhatsAppFallback`.
- **State:** `intakeDraft` + `intakeStep` (see §12, §13).
- **Integration:** **Operating Console (write)** — submission posts to the intake endpoint (§15);
  optional **CMS (read)** for problem-type option labels.

---

## 4. Desktop behavior (global)

- **No global scroll.** `document`/`body` height is locked to the viewport; the active screen fills
  it. Wheel/trackpad gestures are interpreted by the Screen Engine as *intent to advance/retreat*
  states, **debounced** — never free scrolling. A wheel gesture past the last state of a screen is a
  candidate to advance to the next screen (with a deliberate threshold, not hair-trigger).
- **Spatial layout:** wide canvas, generous spacing, the Operational Center occupies the optical
  focal point. Presentation feel over document feel.
- **Keyboard:** `→`/`←` (RTL-aware) and `PageDown`/`PageUp` advance/retreat states; `Tab` cycles
  focusable content within the active screen; `Esc` closes any Layer-4 panel.
- **Deep links:** each screen address (`/`, `/center`, `/services`, …) loads directly to that screen's
  first state. Back/forward maps to screen/state history, not scroll position.
- **Persistent CTA:** the primary CTA is always reachable (header + a quiet persistent affordance),
  routing to S06.

## 5. Mobile behavior (global)

- **Dedicated Mobile Renderer** — not the desktop layout shrunk. Screens are vertical, single-idea
  views advanced by **tap / swipe**; the NAS Core Symbol is compact but still the dominant element.
- **No global scroll.** Each view fits the viewport; only long content (a diagnostic step, a story
  panel) may scroll **inside** its own container.
- **Bottom action bar:** Primary CTA pinned; Navigator opens as a full-height sheet (Layer 4).
- **Touch targets** ≥ 44px; reduced fragment counts; motion simplified (shorter, fewer concurrent
  tweens).
- **Renderer selection:** by viewport/pointer capability at load, re-evaluated on resize/orientation
  change; the Screen Engine state (active screen/step, intake draft) **persists across renderer
  switches**.

## 6. Navigator behavior (Hybrid Navigator)

- **Composition:** the five approved labels + a visual treatment of the final label (`ابدأ بوصف
  المشكلة`) as the primary CTA. No mega-menu; no Products/Pricing/Packages.
- **Two modes, one model:**
  1. **Jump** — selecting a label transitions directly to that screen (GSAP screen transition).
  2. **Progress** — within the canonical path, an unobtrusive "continue" affordance advances S01→…→S06.
- **State indication:** the Navigator reflects `activeScreen` (current label emphasized) and overall
  progress along the canonical path.
- **Desktop:** persistent slim header bar. **Mobile:** trigger opens a full-height sheet; selecting
  closes it and transitions.
- **Accessibility:** `nav` landmark, `aria-current` on the active screen, focus moves to the new
  screen's heading after a transition, focus trap inside the mobile sheet.

---

## 7. GSAP motion map

Principle (Constitution §11, Build Brief §10): **movement follows clarity.** Every animation explains
a transition (scatter→center, problem→clarity, state change). Decorative motion is rejected. All
timelines respect `prefers-reduced-motion` with a static end-state.

| ID | Trigger | Animates | Technique | Duration / ease | Reduced-motion fallback |
|---|---|---|---|---|---|
| `M-SCREEN-IN` | Enter any screen | Incoming screen layers | `gsap.timeline` stagger L0→L3 | 600–800ms / `power2.out` | Instant show, no stagger |
| `M-SCREEN-OUT` | Leave any screen | Outgoing layers | timeline reverse / cross-fade | 400ms / `power2.in` | Instant hide |
| `M-SCREEN-FLIP` | Navigator jump | Shared center motif between screens | **GSAP Flip** | 500ms / `power3.inOut` | Instant swap |
| `M-HERO` | S01 load | Fragments drift in → paths draw → center pulses once | timeline; center last | 1000–1400ms total | Center + paths already present |
| `M-CENTER-FORM` | S02 `2b` | Empty center fills, relationship paths draw, fragments dim | timeline | 900ms | Connected end-state shown |
| `M-CARD-REVEAL` | S03 card expand | Card height + outcome list | timeline / Flip | 350ms / `power2.out` | Expanded state shown |
| `M-STEP-ADVANCE` | S04 next step | Path segment draw + node activate | `drawSVG`-style stroke | 450ms | Active node shown |
| `M-STORY-OPEN` | S05 open story | Story panel rise (Layer 4) | timeline y/opacity | 400ms | Panel shown |
| `M-STEP-FORM` | S06 step change | Field-group slide (RTL-aware) | timeline x/opacity | 300ms | Step swapped instantly |
| `M-SUCCESS` | S06 submit OK | Center "completes" once + success copy | timeline | 700ms | Static success state |

Rules: max one "hero" timeline active per screen; no infinite/idle loops; no parallax; no 3D; no
animated blobs; no radio/wave motion. A global `motionPreference` (`full` | `reduced`) gates every
timeline; the engine builds reduced timelines when set.

---

## 8. Component inventory

Existing components are **reused and refactored** from the page/scroll model into the Screen Engine.
New components are marked **(new)**.

### Engine & navigation
| Component | Role |
|---|---|
| `ScreenEngine` **(new)** | Owns active screen/state, transition orchestration, history, deep-link sync. |
| `ScreenContainer` **(new)** | Wraps a screen; mounts its layer stack; runs `M-SCREEN-IN/OUT`. |
| `HybridNavigator` **(new)** | The §6 navigation (replaces scroll `Header` nav behavior). |
| `Header` (refactor) | Brand + Navigator host + persistent primary CTA. |
| `Footer` (refactor) | Compact; approved links only; no Portfolio/Pricing. |
| `MotionProvider` **(new)** | Exposes `motionPreference`; builds/guards GSAP timelines. |
| `RendererProvider` **(new)** | Selects Desktop vs Mobile Renderer; persists engine state across switch. |

### Visual (Operational Center system)
| Component | Role |
|---|---|
| `NASCoreSymbol` **(new)** | The central brand mark / Operational Center; dominant on every screen. |
| `OperationalCenterHero` (refactor) | S01 hero composition around `NASCoreSymbol`. |
| `MissingCenterBlock` (refactor) | S02 fragments→center diagram. |
| `FragmentNode` **(new)** | Single light fragment (shape + Arabic label, no software logo). |
| `RelationshipPath` **(new)** | Visible path fragment→center (drawable for motion). |
| `SimpleDiagramBlock` | Generic structured diagram. |

### Content & UI
| Component | Role |
|---|---|
| `SectionHeading` | Screen/state headings. |
| `ServicePathCard` (refactor) | S03 path card (problem→pain→path→outcome→light CTA). |
| `ProblemCard` | Problem framing blocks. |
| `OutcomeCard` **(new/derive)** | Outcome lists (S02/S03). |
| `ProcessStep` (refactor) + `ProcessTrack` **(new)** | S04 diagnostic stepper. |
| `CaseStoryCard` (refactor) + `StoryPanel` **(new)** + `EmptyState` **(new)** | S05 stories + قيد الإعداد. |
| `CTAButton` | Primary/secondary; enforces approved CTA strings. |
| `StatusBadge` | Highlight/attention (restrained amber). |

### Intake
| Component | Role |
|---|---|
| `GuidedDiagnosticFlow` **(new)** | S06 multi-step controller. |
| `ContactForm` (refactor) | Hosts stepped fields; no budget/tech fields. |
| `DiagnosticStep` **(new)**, `FormField`, `ProgressRail` **(new)**, `WhatsAppFallback` **(new)** | Step UI. |

---

## 9. State model

Two scopes: **global engine state** (one source of truth) and **screen-local state**.

### Global state (fields)
| Field | Type / values | Notes |
|---|---|---|
| `activeScreen` | `S01..S06` | Current screen address. |
| `activeState` | string | Current intra-screen state (e.g. `2b`). |
| `history` | ordered list of `{screen, state}` | Drives back/forward; mirrors URL. |
| `renderer` | `desktop` \| `mobile` | From `RendererProvider`; re-evaluated on resize. |
| `navigatorOpen` | boolean | Mobile sheet open. |
| `motionPreference` | `full` \| `reduced` | From `prefers-reduced-motion` + user toggle. |
| `transitioning` | boolean | Locks input during a screen transition. |
| `intakeStep` | `0..N` | Guided Diagnostic Flow position. |
| `intakeDraft` | intake fields (§13) | Persisted to `localStorage`. |
| `intakeStatus` | `idle`\|`submitting`\|`success`\|`error` | Submission lifecycle. |

### Transition rules
- Input is ignored while `transitioning = true` (prevents motion overlap).
- Advancing past a screen's last state ⇒ candidate transition to the next canonical screen.
- Navigator **Jump** sets `activeScreen` directly and runs `M-SCREEN-FLIP`.
- Renderer switch preserves `activeScreen`, `activeState`, `intakeStep`, `intakeDraft`.
- Every `activeScreen`/`activeState` change updates the URL (deep-link) and document title (helmet).

### Screen-local state
`heroState` (S01), `centerState` (S02), `expandedPath` (S03), `activeStep` (S04), `openStory` (S05),
`intakeStep`/field values (S06). Local state resets on screen exit **except** intake (draft persists).

---

## 10. Intake workflow (Guided Diagnostic Flow)

The S06 diagnostic, end to end. Fields are the 12 approved items; **no budget/tech questions**.

### Steps & fields
| Step | Fields | Required |
|---|---|---|
| 1 — من أنت | الاسم الكامل · اسم الشركة/المؤسسة · المدينة · رقم الهاتف/WhatsApp · البريد (اختياري) | name, company, city, phone |
| 2 — نوع المشكلة تقريباً | one of: أداة داخلية / أرشفة وتنظيم / تقارير ومتابعة / غير متأكد | one selection |
| 3 — المشكلة | ما المشكلة التي تريد حلها؟ (نص) | yes |
| 4 — الإدارة الحالية | كيف تتم إدارة هذا العمل حالياً؟ (نص) | yes |
| 5 — المستخدمون | من يستخدم هذه العملية؟ (نطاق) | yes |
| 6 — الأثر | ما أثر المشكلة؟ (اختيارات/نص) | yes |
| 7 — أمثلة | مرفقات اختيارية (Excel/صورة/تقرير) | no |
| 8 — التوقيت | متى تريد المعالجة؟ | yes |

### Behavior
1. **Draft persistence** — every change writes `intakeDraft` to `localStorage`; reload restores
   position and values.
2. **Validation** — per-step, inline, Arabic error messages; never blocks on optional fields.
3. **No coercion to "project request"** — language stays "problem description" throughout.
4. **Submit** — final step shows `إرسال وصف المشكلة`; on click `intakeStatus → submitting`, POST to the
   intake endpoint (§15).
5. **Success** — `intakeStatus → success`; show `تم استلام وصف المشكلة، وسنراجعه لفهم الوضع الحالي.`;
   run `M-SUCCESS`; clear draft.
6. **Error** — `intakeStatus → error`; clear Arabic error; **WhatsApp fallback** offered with a
   pre-filled problem summary; draft retained for retry.
7. **Attachments** — optional; client-side type/size guard; uploaded via the endpoint's file channel.

---

## 11. CMS integration points

The CMS is a **content boundary**, not part of the public runtime. The first version may ship with
content as static data; these points define where a CMS plugs in later without changing the Screen
Engine.

| Integration point | Screen | Direction | Content model (fields) |
|---|---|---|---|
| **Case Stories** | S05 | read | `id, slug, problem, previousState, impact, path, outcome, published(bool), order` |
| **Service Path content** | S03 | read | `pathKey(1..3), problem, dailyPain, outcomes[], ctaLabel` — **price is config-locked, not CMS-editable** |
| **Problem-type options** | S06 step 2 | read | `key, labelAr` (must match approved four options) |
| **Recognition / Outcome copy blocks** | S01/S02 | read | `key, headingAr, bodyAr` (approved copy; CMS stores, does not rewrite) |

Rules:
- **Read-only at runtime.** Prefer **build-time fetch** (static generation) for speed/SEO; runtime
  fetch only if a screen needs fresh content.
- The CMS **must not** introduce: a fourth service, a price for Automation, portfolio framing,
  forbidden CTAs, or any field that turns Case Stories into a gallery. A validation layer rejects
  content that violates Constitution §6/§7/§9.
- Empty Case Stories ⇒ S05 renders the approved "قصص قيد الإعداد" empty-state.

---

## 12. Operating Console integration points

The **Operating Console** is NAS CodeWorks' internal triage surface for incoming problem
descriptions (the "reviewable channel" of Constitution §9 / Contact Handling). Only the **integration
contract** is specified here; the Console itself is out of scope for the public build.

| Integration point | Direction | Contract |
|---|---|---|
| **Intake submission** | public → Console (write) | POST to intake endpoint. Payload = the §13 fields + `submittedAt`, `renderer`, `locale`, `source:'guided-diagnostic'`. **No budget/tech fields exist.** |
| **Attachments** | public → Console (write) | Optional files referenced by the submission record. |
| **Submission ack** | Console → public (read) | Synchronous `{ ok, reference }` drives the success state; failure drives the error + WhatsApp fallback. |
| **Triage status** | Console-internal | Suggested states: `new → reviewing → clarifying → scoped → not-a-fit`. Mirrors §"ماذا يحدث بعد إرسال المشكلة". Not exposed publicly. |
| **Notification** | Console-side | New submission notifies the operator channel (email/WhatsApp/webhook). |

Rules:
- The public site only needs: **submit**, **receive ack**, **show success/error**, **offer WhatsApp
  fallback**. Everything else is Console-side.
- The payload contract is **append-only** — never add budget, platform, technology, or "quote" fields
  to satisfy the Console; that would violate Constitution §7/§9.
- Auth/storage/PII handling for the Console is defined in the Console's own spec, not here. The public
  endpoint must transmit over HTTPS and must not log PII client-side.

---

## 13. Accessibility & performance (acceptance-level)

- **A11y:** RTL correct; `aria-current` on active screen; focus moves to new screen heading; focus
  trap in Layer-4 panels/sheets; keyboard advance/retreat; visible focus; readable Arabic sizes; high
  contrast; understandable validation; `prefers-reduced-motion` honored.
- **Performance:** fast first screen (the hero must not wait on CMS); lazy-mount non-active screens;
  GSAP timelines built per-screen and disposed on exit; images/SVG optimized; no heavy component
  library; mobile motion simplified.
- **SEO:** per-screen title/meta via react-helmet-async; each screen address is crawlable/deep-linkable
  with its approved Arabic content rendered (prefer build-time/SSG); Arabic keyword focus per
  Constitution §10 / Build Brief §24.

---

## 14. Definition of Done (maps to Constitution anti-patterns)

A screen passes only if **all** hold:

- [ ] No global scroll anywhere; movement is deliberate screen/state change.
- [ ] NAS Core Symbol / Operational Center is the strongest element on the screen; fragments are
      lighter and secondary; relationship paths are visible.
- [ ] Desktop and Mobile use **distinct** renderers; engine state survives renderer switch.
- [ ] Hybrid Navigator shows only the five approved labels; final label acts as primary CTA.
- [ ] Approved copy is verbatim and correctly distributed; nothing rewritten.
- [ ] Exactly three services; `$500` / `$900` / Automation-undisclosed; no pricing table.
- [ ] Approved CTA + submit + success strings exact; no forbidden CTA appears.
- [ ] Contact is a Guided Diagnostic Flow; no budget/app-type/technology fields.
- [ ] Case Studies are problem stories, never a portfolio/gallery.
- [ ] No Dashboard Hero, product screenshots, real software logos, radio/media forms, stock photos.
- [ ] Every animation explains a transition; `prefers-reduced-motion` yields a static end-state.

---

## 15. What this document does **not** do

- It contains **no code** and **no mockups**.
- It does not change positioning, services, pricing, CTA, contact logic, case-studies philosophy,
  Operational Center philosophy, visual identity, or the §11 Experience Architecture — it **implements**
  them.
- The Operating Console internals and the CMS product choice are referenced as boundaries only; their
  full specs live in their own documents.
