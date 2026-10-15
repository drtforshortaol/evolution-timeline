#!/usr/bin/env python3
"""Verify lossless identifiers and prevent promotion of incomplete legacy inventory."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/"data/legacy-inventory-draft1.json").read_text())
assert data["schema_version"] == 1
assert data["status"] == "inventory-only-endpoints-unverified"
for name,count in (("concepts",49),("transitions",37),("visuals",73)):
    items=data[name]
    assert len(items)==count, (name,len(items))
    ids=[x["id"] for x in items]
    assert len(set(ids))==len(ids), name
    assert all(isinstance(i,str) and i for i in ids)
for item in data["transitions"]:
    assert item["approval"]=="pending"
    assert item["endpoint_status"]=="unverified"
    assert item["relationship_status"]=="unreviewed"
    assert "source_id" not in item and "target_id" not in item
assert data["provenance"]["source_blob_sha"]
print("PASS: legacy inventory identity, completeness and nonapproval")
