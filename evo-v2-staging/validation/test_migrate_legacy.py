#!/usr/bin/env python3
import unittest
from migrate_legacy import stage_legacy
class LegacyMigrationTests(unittest.TestCase):
    def test_preserves_identity_without_approval(self):
        r=stage_legacy([{"id":"TR-0114","source_id":"A","target_id":"B","kind":"branching"}])["records"][0]
        self.assertEqual((r["id"],r["source_id"],r["target_id"]),("TR-0114","A","B"))
        self.assertEqual(r["approval"],"pending")
        self.assertEqual(r["kind"],"selected-pathway")
    def test_missing_endpoint_rejected(self):
        with self.assertRaises(ValueError):stage_legacy([{"id":"X","source_id":"A"}])
    def test_duplicate_rejected(self):
        row={"id":"X","source_id":"A","target_id":"B"}
        with self.assertRaises(AssertionError):stage_legacy([row,row])
if __name__=="__main__":unittest.main()
