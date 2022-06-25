---
layout: example.11ty.cjs
title: <blog-posts> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  blog-posts p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<blog-posts>
  <p>This is child content</p>
</blog-posts>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<blog-posts>
  <p>This is child content</p>
</blog-posts>
```
