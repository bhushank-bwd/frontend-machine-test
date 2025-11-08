# File Structure

## UI

- Data
- Component
  - list state
  - **handleAddClick**
    - updateList function
      - prev state of list
      - map
        - id same then add new item for it
        - recursive update function for children if it has
        - return new state
    - update state from updateList
  - **handleDeleteClick**
    - deleteList function
      - filter with non id match
        - map it for children with recursive deleteList
- Structure Component
  - **props** list, handleAddClick, handleDeleteClick
  - expand state, other input state to add new item
  - if item is folder & has children then show expand option
  - item and buttons
  - recursive Structure Component for Children
