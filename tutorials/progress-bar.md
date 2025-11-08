# Progress bar

## Props

- progress

## Without animation

### Render

- outer div - border radius
  - inner div
    - dynamic width, color on progress size to visible, bgColor
    - aria-value and role attribute

## With animation

### State

- animatedProgress- 0

### use effect

    on progress set animatedProgress to progress after 100 ms by setTimeout

### Render

- as above div structure
  - instead of width use transform:translateX(progress-100) to avoid repaint due to width
  - for inner set style transition with easy-in 0.3s
