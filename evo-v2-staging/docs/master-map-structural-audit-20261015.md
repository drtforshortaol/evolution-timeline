# Legacy Master Map structural inspection — 2026-10-15

Source: `drtforshortaol/master-evolution-map-test/index.html` at blob `b0b1738e8451421253f00ac4b0cdc9f290a5fc2a`.

## Verified source observations

- The prototype uses HTML `button.map-object` elements with `data-kind="node"` and `data-kind="transition"`, identified by `data-key`.
- The `great-split` transition is followed in the visual markup by a `map-row` containing bacterial and archaeal columns; this is **visual layout evidence**, not a machine-readable canonical ancestry edge.
- The `bacterial-diversification` transition is nested in `bacteria-detail`, preceding child columns. DOM nesting is **presentation context**, not verified canonical source and target IDs.
- Explanatory `miniMap` strings and scientific descriptions are separate from a normalized edge registry.
- The 37-record endpoint manifest has null source and target concept arrays throughout.

## Migration decision

Keep all 37 transitions pending with unresolved canonical endpoints. Preserve original IDs, keys, source provenance and legacy relationship labels. Record DOM layout adjacency only as noncanonical navigation evidence in a later extraction phase. Do not infer ancestry or auto-approve scientific relationships.

## Next implementation

Create a reproducible source-markup extraction utility with fixture tests; emit candidate layout neighbors separately from canonical relationships. Independently review source descriptions and scientific evidence before promoting any edge.
