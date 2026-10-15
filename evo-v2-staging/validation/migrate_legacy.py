#!/usr/bin/env python3
"""Conservative adapter: preserves IDs, endpoints and evidence status; never auto-approves."""
import json
from pathlib import Path
from validate_migration_schema import validate

def stage_legacy(source):
    records=[]
    for item in source:
        for key in ("id","source_id","target_id"):
            if not isinstance(item.get(key),str) or not item[key]:
                raise ValueError("Missing immutable legacy field: "+key)
        records.append({"id":item["id"],"source_id":item["source_id"],
                        "target_id":item["target_id"],"kind":"selected-pathway",
                        "approval":"pending","legacy_kind":item.get("kind","unclassified"),
                        "provenance":item.get("provenance","legacy-unverified")})
    result={"schema_version":1,"records":records}
    validate(result)
    return result

if __name__=="__main__":
    import argparse
    parser=argparse.ArgumentParser()
    parser.add_argument("source",type=Path)
    parser.add_argument("destination",type=Path)
    args=parser.parse_args()
    data=json.loads(args.source.read_text())
    if not isinstance(data,list):raise ValueError("Expected list of legacy transition objects")
    result=stage_legacy(data)
    if args.destination.exists():raise FileExistsError("Refusing to overwrite migration candidate")
    args.destination.write_text(json.dumps(result,indent=2)+"\n")
    print("Staged",len(result["records"]),"unapproved records")
