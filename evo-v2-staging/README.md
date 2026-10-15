# EVO V2 — Isolated Foundation (Development Only)
This is an **independent, portable prototype** for a future dedicated `EVO-v2` repository.
It is isolated under `evo-v2-staging/` on a non-main branch of the existing Evolution Timeline repository.
No legacy application files, MBA Hub V2 files, canonical evolutionary identifiers, or deployed outputs are changed.

## Preview locally
From the repository root: `python3 -m http.server 8000`
Then open `http://localhost:8000/evo-v2-staging/app/`.
The `features/paulinella.json` file owns the science data. Presentation code only renders text safely.
No service worker or offline publication is enabled yet.

## Release gates
Independent repository creation, reviewed science, canonical content schema, testing, offline integration, security and physical-device acceptance are required before publication.
