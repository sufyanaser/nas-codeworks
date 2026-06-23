> **Status:** Supporting
> **Compatibility with Constitution v2:** Compatible (build-prompt pointer updated — see note below)
> **Authority:** docs/00-authority/01_Project_Constitution_v2.md
> **Last reviewed:** 2026-06-23 (Constitution Migration Pass)

# NAS CodeWorks — Project Setup Instructions

## Recommended path

```powershell
C:\Projects\NAS CodeWorks
```

## Recommended structure

```text
C:\Projects\NAS CodeWorks
│
├─ docs
│  ├─ 00-authority
│  ├─ 01-strategy
│  ├─ 02-copy
│  ├─ 03-identity
│  ├─ 04-build
│  └─ archived
│
├─ website
└─ README.md
```

## PowerShell commands

```powershell
mkdir "C:\Projects\NAS CodeWorks"
cd "C:\Projects\NAS CodeWorks"

mkdir docs
mkdir docs\01-strategy
mkdir docs\02-copy
mkdir docs\03-identity
mkdir docs\04-build
mkdir website
```

## Where to put the website code

Website source code goes inside:

```text
C:\Projects\NAS CodeWorks\website
```

## Where to keep context

Context files stay inside:

```text
C:\Projects\NAS CodeWorks\docs
```

Do not scatter context files in the project root.

## First build prompt

The previous build prompt (`02_Website_Build_Execution_Prompt.md`) has been **archived** to
`docs\archived\` because its long-scrolling, single-renderer architecture is superseded.

Build direction now comes from:

```text
docs\00-authority\01_Project_Constitution_v2.md   (highest authority)
docs\04-build\01_Website_UI_Build_Brief.md         (build brief, updated to Constitution v2)
```

Read the Constitution first, then the UI / Build Brief, before any implementation.

## Build tool guidance

Use Claude Code, Cursor, Codex, or the selected website builder.

The build tool must:

1. inspect project structure
2. inspect package.json if present
3. inspect routing/styling setup
4. build the five approved pages
5. run available checks
6. report modified files
7. not commit unless explicitly instructed
