# HTML notes

## Table of Contents

- [Headings Element](#headings-element)
- [Paragraph Element](#paragraph-element)
- [Void Elements](#void-elements)
- [List Elements](#list-elements)
- [Nesting and Indentation](#nesting-and-indentation)
- [Anchor Elements](#anchor-elements)
- [Image Elements](#image-elements)
- [HTML Boilerplate](#html-boilerplate)
- [Footer Element](#footer-element)

### Headings Element:

- [Check this link to see exercise about how to use headings.](2.1%20Heading%20Element/index.html)
- Don't and do:
  - Keep only 1 `<h1>` element in the page. Instead, keep using lower level elements (`<h2>`, `<h3>`)
  - Do not skip levels. Do not use `<h1>` and then use `<h2>`
- More information about HTML and headers [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

### Paragraph Element:

- Paragraphs look like this: `<p>This is a paraghraph.</p>`
- [Check this link to see exercise about how to use paragraphs.](2.2%20Paragraph%20Element/index.html)
- Resource to create Lorem Ipsum text (Usually used by programmers) = [link](https://www.lipsum.com/)

### Void Elements:

- These are self closing tags. They don't have a separate closing tag. Example: `<br />` or `<hr />`
- `<br />` creates a line break. We can also write as `<br>`
- `<hr />` creates a horizontal rule that separates content. We can also write it as `<hr>`
- [Check this link to see exercise about how to use void elements.](2.3%20Void%20Elements/index.html)

### List Elements:

- We have unordered `<ul>` which creates a list with no numeration or order.
- We have ordered `<ol>` which creates a list with numeration.
- Inside both lists we have `<li>` which represents each item inside the list.
- [Check this link to see exercise about how to use list elements.](3.0%20List%20Elements/index.html)
- More information about `ul` and `ol`: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
- `start="number"` is an attribute for ordering list. It specifies the first number in the sequence.

### Nesting and Indentation:

- [Check this link to see exercise about how to use nesting and Indentation.](3.1%20Nesting%20and%20Indentation/index.html)

### Anchor Elements:

- A link looks like this `<a href="link"> Content </a>`
- `href=""` is an attribute of anchor element. It specifies where the link should go when clicked.
- `draggable=true` is an anchor element attribute that makes the link draggable.
- [Check this link to see exercise about how to use Anchor elements.](3.2%20Anchor%20Elements/index.html)

### Image Elements:

- It looks like this `<img src="url" alt="description-of-image">` where `src=""` is an attribute that contains the URL of the image and `alt=""` is a description of the image, and it should always be added.
- [Check this link to see exercise about how to use Image element.](3.3%20Image%20Elements/index.html)

### HTML Boilerplate:

- HTML boilerplate is usually when creating a new HTML file.
- It looks like this:

  ```html
  <!DOCTYPE html>
  <!--- Defines document type --->
  <html lang="en">
    <!--Defines  language--->
    <head>
      <!-- Head contains meta information about the document --->
      <meta charset="UTF-8" />
      <!-- Meta charset ensures that all the characters are putting in correctly  in the web-->
      <title>Document</title>
      <!--  Title tag gives a title to the webpage -->
    </head>

    <body>
      <!--- Body contains everything that will be displayed on the page -->
      <h1>Hello World!</h1>
    </body>
  </html>
  ```

### Footer Element:

- A `<footer>` typically contains information about the author of the section, copyright data or links to related documents.
- this is an example of a footer:

  ```html
  <footer>
    <p>© 2018 Gandalf</p>
  </footer>
  ```

- more information about `<footer>` can be found on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
