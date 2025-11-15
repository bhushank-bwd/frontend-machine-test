# Tab Form

## Sates

- activeIndex
- data
- error
- tabs[variable] [{name,component,validate(boolean return and set error if any)}]

## Other component

- pass data and setData to collect data through input
- Make Active Component that will serve activeIndex component

## Action

- Next click => validate current index and move to next
- previous click => move to previous
- On tab click validate current and set active index to clicked one
- on submit make console log

## Render

- tab list render title
- Active Component with props
- Next Button except 0 index
- previous Button except Last index
- submit button on last tab
