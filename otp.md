# OTP Input

## Variable

- **OTP_DIGIT_SIZE** to scale up
- **inputArr** with digit size and filled with ""
- **inputRef** for focus

## useEffect

- focus on 0 ref element using optional chaining

## Rendering

- Map Input Box with InputArr state
  - Key, value, event
- use Ref

```jsx
ref={(input) => (inputRef.current[index] = input)}
```

## Event

### handleOnChange

- If value is number
  - trim value
  - copy inputArr using spread operator
  - if newValue then focus on next element/index using optional ref

### handleOnKeyDown

- if key is **Backspace** and value is not present then focus on previous index(optional)
