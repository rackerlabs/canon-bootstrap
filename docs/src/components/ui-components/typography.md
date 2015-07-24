---
title: Typography
id: typography
index: 1
collection: ui-components
adherence: 2
---
<div class="row">
  <div class="col-md-3">
    <h3>Headings</h3>
    <p>Use these styles to visually distinguish sections of content.</p>
    <h3>When to use</h3>
    <ul>
      <li>Page titles should use &lt;h2 class="rs-page-title"&gt;</li>
      <li><a href="#details">Section</a> headings should use &lt;h1&gt;, sub-sections should use &lt;h3&gt;.</li>
      <li>Sidebar headings should use &lt;h3&gt;, sidebar sub-headings should use &lt;h4&gt;</li>
    </ul>
    <h4>Adherence Rating: {{ adherence }}</h4>
  </div>
  <div class="col-md-9">


    <table class="table type-example">
      <thead>
        <tr>
          <th>Heading</th>
          <th>Element/Class</th>
          <th>Markup</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h1>Heading 1</h1>
          </td>
          <td>H1</td>
          <td>
            <div class="highlight">
              ```html
              <h1>Heading 1</h1>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Heading 2</h2>
          </td>
          <td>H2</td>
          <td>
            <div class="highlight">
              ```html
              <h2>Heading 2</h2>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h2 class="rs-page-title">Heading 2</h2>
          </td>
          <td>H2 w/ .rs-page-title</td>
          <td>
            <div class="highlight">
              ```html
              <h2 class="rs-page-title">Heading 2</h2>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Heading 3</h3>
          </td>
          <td>H3</td>
          <td>
            <div class="highlight">
              ```html
              <h3>Heading 3</h3>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Heading 4</h4>
          </td>
          <td>H4</td>
          <td>
            <div class="highlight">
              ```html
              <h4>Heading 3</h4>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h4 class="rs-quiet">Heading 4</h4>
          </td>
          <td>H4 w/ .rs-quiet</td>
          <td>
            <div class="highlight">
              ```html
              <h4 class="rs-quiet">Heading 4</h4>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Heading 5</h5>
          </td>
          <td>H5</td>
          <td>
            <div class="highlight">
              ```html
              <h5>Heading 5</h5>
              ```
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h6>Heading 6</h6>
          </td>
          <td>H6</td>
          <td>
            <div class="highlight">
              ```html
              <h6>Heading 6</h6>
              ```
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
