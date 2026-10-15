#!/usr/bin/env python3
"""Read-only guard for isolated EVO V2 Paulinella science staging."""
import json
from pathlib import Path
p=Path(__file__).resolve().parents[1]/"features"/"paulinella.json"
d=json.loads(p.read_text(encoding="utf8"))
assert d["targetApplication"]=="EVO-v2"
assert {"MBA-hub-v2","MBA-hub","MBA-hub-v2-test"}<=set(d["excludedApplications"])
assert d["publicationAuthorized"] is False
assert d["canonicalIdentifier"] is None
assert d["review"]["integratedIntoRuntime"] is False
assert d["review"]["scopeApprovedForEvoV2"] is True
assert d["review"]["independentScientificReviewComplete"] is False
assert d["diagram"]["connectionType"]=="conceptual-parallel-not-lineage-ancestor"
assert len(d["references"])>=3
assert all(r["url"].startswith("https://") for r in d["references"])
print("PASS: EVO-only scope, non-ancestry parallel, references, and publication safeguards")
