# Abhay Jain — Interactive 3D Executive Profile

A separate visual concept for Abhay Jain’s executive profile. This repository does not modify or replace the existing editorial site or its `abhayjain.net` deployment.

## Concept

The landing page places Abhay’s transparent portrait at the centre of a restrained, code-native 3D composition. Pointer movement creates subtle X/Y tilt across the portrait and depth layers; orbit labels, grid lines, and a halo create a lightweight sense of dimensionality without a heavy 3D runtime.

The page preserves the current site’s curated information architecture and source data:

- Current focus
- Track record
- Selected research, technical writing, and patents
- Roles and affiliations
- Education
- About page with experience, recognitions, publications, and background
- LinkedIn contact path

## Routes

- `/` — interactive 3D concept landing page
- `/about` — full executive profile using the same source data

## Local development

Requirements: Node.js 22+

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

The site uses a static export and is suitable for a separate Vercel project. No Three.js, Spline iframe, external 3D runtime, or recurring maintenance service is required.

## Asset

`public/abhay-3d-portrait.png` is a transparent generated portrait asset created from the provided reference photograph. It is used only by this separate concept repository.

## Content guardrails

This concept inherits the current repo’s content. Before any public launch, confirm the Renesas title, metrics, and public contact details with Abhay. Do not connect `abhayjain.net` to this project without approval.
