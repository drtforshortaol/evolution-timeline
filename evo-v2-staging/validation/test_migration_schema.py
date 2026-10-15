#!/usr/bin/env python3
import unittest
from validate_migration_schema import validate

def record(kind="branching", approval="pending", evidence=None):
    r={"id":"TR-TEST","kind":kind,"approval":approval,"source_id":"C-A","target_id":"C-B"}
    if evidence is not None:r["evidence"]=evidence
    return {"schema_version":1,"records":[r]}

class MigrationSchemaTests(unittest.TestCase):
    def test_pending_science(self): self.assertTrue(validate(record()))
    def test_approved_science_needs_evidence(self):
        with self.assertRaises(AssertionError): validate(record(approval="approved"))
    def test_evidenced_science(self): self.assertTrue(validate(record(approval="approved",evidence=["doi:example"])))
    def test_navigation_never_canonical(self):
        with self.assertRaises(AssertionError): validate(record(kind="navigation",approval="approved"))
    def test_duplicate_ids(self):
        data=record();data["records"].append(dict(data["records"][0]))
        with self.assertRaises(AssertionError):validate(data)
    def test_invalid_kind(self):
        with self.assertRaises(AssertionError):validate(record(kind="ancestor-by-navigation"))
    def test_missing_endpoint(self):
        data=record();data["records"][0]["target_id"]=""
        with self.assertRaises(AssertionError):validate(data)

if __name__=="__main__": unittest.main()
