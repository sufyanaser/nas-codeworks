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
│  ├─ 01-strategy
│  ├─ 02-copy
│  ├─ 03-identity
│  └─ 04-build
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

Use:

```text
docs\04-build\02_Website_Build_Execution_Prompt.md
```

as the full prompt for the selected build tool.

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
