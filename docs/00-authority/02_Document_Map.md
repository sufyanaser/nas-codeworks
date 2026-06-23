> **Status:** Authoritative
> **Compatibility with Constitution v2:** Authoritative index
> **Authority:** docs/00-authority/01_Project_Constitution_v2.md
> **Last reviewed:** 2026-06-23 (Constitution Migration Pass)

# NAS CodeWorks — Document Map

This map is the index of all project documentation after the Constitution Migration Pass. Every document carries a status header. Three status values are used:

- **Authoritative** — governs the project. The Constitution and its two companion authority documents.
- **Supporting** — valid, approved detail subordinate to the Constitution. No conflicts.
- **Archived** — historical only. Superseded; retained for reference, **not** authoritative.

Compatibility (per Task audit): **Compatible** · **Partially Compatible (updated)** · **Superseded (archived)**.

---

## Authoritative documents

| Document | Role |
|---|---|
| `docs/00-authority/01_Project_Constitution_v2.md` | Highest authority. Consolidates positioning, Operational Center philosophy, services, pricing, CTA, navigation, content governance, visual identity, and the latest Experience Architecture (§11). |
| `docs/00-authority/02_Document_Map.md` | This index. |
| `docs/00-authority/03_Project_Status.md` | Consistency score, remaining conflicts, implementation-readiness. |

## Supporting documents

| Document | Compatibility | Notes |
|---|---|---|
| `docs/00_START_HERE.md` | Compatible | Onboarding entry. Build-phase pointer updated to Constitution + Build Brief. |
| `docs/01-strategy/01_Project_Positioning.md` | Compatible | Positioning — consolidated into Constitution §1–§4. |
| `docs/01-strategy/02_ICP_Services_And_Commercial_Rules.md` | Compatible | **Approved Services & Pricing — preserved** (Constitution §5–§6). |
| `docs/01-strategy/03_Content_Governance_Rules.md` | Compatible | Content governance — consolidated into §9. |
| `docs/01-strategy/04_CTA_Navigation_Visual_Guardrails.md` | Compatible | **Approved CTA & Navigation — preserved** (§7–§8). |
| `docs/02-copy/01_Home_Page_V3.md` | Compatible | Approved copy — preserved verbatim. |
| `docs/02-copy/02_Services_Page_V2.md` | Compatible | Approved copy — preserved verbatim. |
| `docs/02-copy/03_How_We_Work_Page_V2.md` | Compatible | Approved copy — preserved verbatim. |
| `docs/02-copy/04_Contact_Problem_Discovery_Page_V2.md` | Compatible | **Contact Page Logic — preserved**; delivered via Guided Diagnostic Flow (§11.8). |
| `docs/02-copy/05_Case_Studies_Problem_Solution_Stories_Page_V2.md` | Compatible | **Case Studies philosophy — preserved** (§9). |
| `docs/03-identity/01_Core_Visual_Concept.md` | Compatible | Operational Clarity — consolidated into §10. |
| `docs/03-identity/02_Visual_Identity_Finalization.md` | Compatible | **Visual Identity decisions — preserved** (§10). |
| `docs/03-identity/03_Operational_Center_And_Circle_Philosophy_Update.md` | Compatible | **Operational Center philosophy — preserved** (§4). |
| `docs/04-build/01_Website_UI_Build_Brief.md` | **Partially Compatible — Updated** | Revised to reflect §11 Experience Architecture (Interactive Executive Presentation, Operational Center Experience, Screen Engine, No Global Scroll, Desktop/Mobile Renderers, Hybrid Navigator, Guided Diagnostic Flow, Layered Interface, NAS Core Symbol). Approved services/pricing/CTA/contact/case-studies preserved. |
| `docs/04-build/03_Project_Setup_Instructions.md` | Compatible | Setup guide. Build-prompt pointer + folder tree updated. |
| `docs/05-implementation/01_Screen_Engine_Execution_Prompt.md` | Compatible | Implementation specification derived from Constitution §11 + UI Build Brief. Defines Screens 01–06, desktop/mobile/navigator behavior, GSAP motion map, component inventory, state model, intake workflow, CMS & Operating Console integration points. The build-from document. |

## Archived documents

| Document | Compatibility | Reason |
|---|---|---|
| `docs/archived/02_Website_Build_Execution_Prompt.md` | **Superseded** | Built around long-scrolling, single-renderer "multi-page marketing website" + mobile-first responsive reflow + fixed Home scroll order. Superseded by Constitution §11. Approved strategy it carried is preserved in the Constitution and the updated UI Build Brief. Retained for history; not authoritative. |

---

## Root-level files (outside `docs/`, updated for consistency)

| File | Change |
|---|---|
| `README.md` | Start-Here sequence now points to the Constitution and authority docs; archived-prompt reference corrected. |
| `BUILD_AGENT_RULES.md` | Mandatory-reading pointers now reference the Constitution and updated Build Brief; archived prompt flagged. |

## Folder structure after migration

```text
docs
├─ 00-authority
│  ├─ 01_Project_Constitution_v2.md   (Authoritative)
│  ├─ 02_Document_Map.md              (Authoritative)
│  └─ 03_Project_Status.md            (Authoritative)
├─ 01-strategy   (Supporting × 4)
├─ 02-copy       (Supporting × 5)
├─ 03-identity   (Supporting × 3)
├─ 04-build
│  ├─ 01_Website_UI_Build_Brief.md    (Supporting — updated)
│  └─ 03_Project_Setup_Instructions.md (Supporting)
├─ 05-implementation
│  └─ 01_Screen_Engine_Execution_Prompt.md (Supporting — build-from spec)
└─ archived
   └─ 02_Website_Build_Execution_Prompt.md (Archived)
```
