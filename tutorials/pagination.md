# Pagination

## States

- productList
- currentPage

## useEffect

- call fetchData function

## Variable

- productLength
- maxPage
- start
- end

## Render

- Pagination numbers using maxPage array(maxPage).keys.map
- Next and previous button by using currentPage
- Product List render
  - use slice with start and end

## Function

- Next -> increase currentPage by 1
- Previous -> decrease currentPage by 1
- page on click -> set currentPage by value
