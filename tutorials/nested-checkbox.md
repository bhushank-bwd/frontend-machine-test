# Nested Checkbox

## UI

- Data
- APP
  - checked state
- CheckBox Component
  - Render Checkbox
  - if item has children then call CheckBox Component with children
  - On Check Handle
    - Node and Checked
    - setState
      - update node with children as per checked with recursive
      - verify Parent Checked
        - if no children then return node checked status
        - If children check it's all children are checked with recursive and set allChildrenChecked to current
        - return new allChildrenChecked
      - call verify parent checked on every data element
