import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class BlogPosts extends LitElement {
  static get properties() {
    return {
      data: Object,
      headers: Object,
    }
  }

  constructor() {
    super();
    this.fetchHeaders();
    this.fetchData();
  }

  fetchHeaders() {
    fetch('https://publishing-project.rivendellweb.net/wp-json/wp/v2/posts', {
      method: 'HEAD'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error loading headers, status = ${response.status}`);
        }
        // console.log(response.headers.get('content-type'));
        return response.headers;
      })
      .then((headers) => {
        this.headers = headers;
      })
      .catch((error) => {
        console.error('Error with headers:', error);
      })
  }

  fetchData() {
    fetch('https://publishing-project.rivendellweb.net/wp-json/wp/v2/posts?embedded=true')
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }

        return response.json();
        // return data;

      })
      .then((data) => {
        this.data = data;
        // console.log('Success:', this.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    if (!this.data && !this.headers) {
      return html`
          <h2>Loading...</h2>
        `;
    }
    return html`
      ${this.data
        .map((post) =>
          html`<article part="article-post">
            <h2><a href="${post.link}">${post.title.rendered}</a></h2>

            <div class="post-content" part="article-content">
              ${unsafeHTML(post.excerpt.rendered)}
            </div>
          </article>
          `
        )
      }
    `
  }

}

customElements.define('blog-posts', BlogPosts);