#!/usr/bin/env python3
"""Fail-closed EVO migration record validator; no scientific claims are approved here."""
import json
from pathlib import Path
ALLOWED = {"branching", "lineage-continuity", "diversification", "endosymbiosis", "innovation", "environmental-causation", "habitat-transition", "conceptual-summary", "navigation", "selected-pathway"}
SCIENTIFIC = ALLOWED - {"navigation", "selected-pathway", "conceptual-summary"}
def validate(data):
    assert data["schema_version"] == 1
    records = data["records"]
    ids = [r["id"] for r in records]
    assert len(ids) == len(set(ids)), "Duplicate permanent identifier"
    for r in records:
        assert isinstance(r["id"], str) and r["id"]
        assert r["kind"] in ALLOWED
        assert r["approval"] in {"pending", "approved", "rejected"}
        assert r["source_id"] and r["target_id"]
        if r["kind"] in SCIENTIFIC and r["approval"] == "approved":
            assert r.get("evidence"), "Approved science requires evidence"
        if r["kind"] in {"navigation", "selected-pathway"}:
            assert r["approval"] != "approved", "Presentation edges cannot be canonical science"
    return True
if __name__ == "__main__":
    root = Path(__file__).resolve().parents[1]
    validate(json.loads((root / "data/migration-candidate.json").read_text()))
    print("PASS: migration schema, evidence gate and presentation separation")
