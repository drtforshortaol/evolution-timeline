#!/usr/bin/env python3
"""Cross-check EVO legacy IDs and unresolved endpoint manifest without inventing ancestry."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
inventory=json.loads((root/"data/legacy-inventory-draft1.json").read_text())
endpoints=json.loads((root/"data/endpoint-reconciliation-draft1.json").read_text())
concepts={x["id"] for x in inventory["concepts"]}
expected={x["id"]:x["key"] for x in inventory["transitions"]}
rows=endpoints["transitions"]
assert len(rows)==len(expected)==37
assert len({x["id"] for x in rows})==len(rows)
for row in rows:
    assert row["id"] in expected
    assert row["source_key"]==expected[row["id"]]
    assert row["approval"]=="pending"
    for field in ("source_concept_ids","target_concept_ids"):
        ids=row[field]
        if ids is not None:
            assert isinstance(ids,list) and ids
            assert all(x in concepts for x in ids)
        else:
            assert row["evidence_status"]=="endpoint-unverified"
assert endpoints["source"]["blob_sha"]
print("PASS: 37 endpoint records reconciled by ID and source key; unresolved endpoints remain unapproved")
