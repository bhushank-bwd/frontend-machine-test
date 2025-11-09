# Search bar

## States

1. searchText input
2. searchActive
3. result
4. cachedResult

## Fetch data

1. if cached then send else call api and store in cache also

## Use effect

1. use debounce fetchData on searchText Change
   1. setTimeOut

## Render

1. Input with searchText
   1. two event for the searchActive blur and focus
2. show search list
