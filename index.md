---
layout: layout.liquid
title: Home
---

# My Code Site

## Focus Transformer
```javascript
const x = y; // [!code focus]
const z = a;
```

## Diff + Focus Transformers
```c#
options.AddDashboard(uiopt =>
{
    uiopt.BasePath = "/tickerq-dashboard"; // [!code --]
    uiopt.EnableBasicAuth = true; // [!code ++]
    uiopt.Focus = true; // [!code focus]
});
```

## Highlight Transformer
```javascript
function example() {
    console.log("This line is normal");
    console.log("This line is highlighted"); // [!code highlight]
    return true;
}
```

## No Transformer
```javascript
function example() {
    console.log("This line is normal");
    console.log("This line is highlighted");
    return true;
}
```