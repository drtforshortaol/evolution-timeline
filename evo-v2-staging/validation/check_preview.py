#!/usr/bin/env python3
"""Static isolation checks; not a replacement for browser and offline testing."""
from pathlib import Path
root=Path(__file__).resolve().parents[1]
app=root/"app"
index=(app/"index.html").read_text()
entry=(app/"main.js").read_text()
renderer=(app/"science.js").read_text()
assert 'type="module" src="./main.js"' in index
assert '../features/paulinella.json' in entry
assert 'textContent=' in renderer
assert 'innerHTML' not in renderer
assert 'conceptual-parallel-not-lineage-ancestor' in renderer
assert not (root/"service-worker.js").exists()
print("PASS: isolated preview, safe DOM text rendering, explicit science data linkage")
