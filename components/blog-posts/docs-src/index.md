---
layout: page.11ty.cjs
title: <blog-posts> ⌲ Home
---

# &lt;blog-posts>

`<blog-posts>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<blog-posts>` is just an HTML element. You can it anywhere you can use HTML!

```html
<blog-posts></blog-posts>
```

  </div>
  <div>

<blog-posts></blog-posts>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<blog-posts>` can be configured with attributed in plain HTML.

```html
<blog-posts name="HTML"></blog-posts>
```

  </div>
  <div>

<blog-posts name="HTML"></blog-posts>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<blog-posts>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;blog-posts&gt;</h2>
    <blog-posts .name=${name}></blog-posts>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;blog-posts&gt;</h2>
<blog-posts name="lit-html"></blog-posts>

  </div>
</section>
