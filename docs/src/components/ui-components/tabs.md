---
title: Tabs
id: tabs
index: 9
collection: ui-components
adherence: 2
---
<div class="row">
  <div class="col-md-3">
    <h3>When to use</h3>
    <p>Tabs are used to navigate lists of related content. In forms, they are used to categorize and organize similar content. The count for each list is not required, but feel free to use where appropriate.</p>
    <ul>
      <li>Use when the content for each tab has similar structure (e.g., list tables).</li>
      <li>Use when there is not enough space on the page to show all content.</li>
      <li>Use when the content of each tab can be viewed separately from each other, and doesn't require comparison.</li>
      <li>Do not use when the content inside each pane would function just as well in its own separate page.</li>
      <li>Limit to 5-8 sections, depending on the length of each section name.</li>
    </ul>
    <h4>Adherence Rating: {{ adherence }}</h4>
  </div>
  <div class="col-md-9">
    <h4>Example</h4>
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a >Home <span class="badge">3</span></a></li>
      <li role="presentation"><a >Profile <small>(13)</small></a></li>
      <li role="presentation"><a >Messages <i class="fa fa-question-circle"></i></a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Updated</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table Item 1</td>
              <td>Aug 28, 2013</td>
              <td>123456</td>
            </tr>
            <tr>
              <td>Table Item 2</td>
              <td>Aug 25, 2013</td>
              <td>789012</td>
            </tr>
            <tr>
              <td>Table Item 3</td>
              <td>Jul 14, 2013</td>
              <td>345678</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane">
      </div>
      <div class="tab-pane">
      </div>
    </div>
    <h4>Markup</h4>
```html
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="">Home <span class="badge">3</span></a></li>
  <li role="presentation"><a href="">Profile <small>(13)</small></a></li>
  <li role="presentation"><a href="">Messages <i class="fa fa-question-circle"></i></a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Updated</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table Item 1</td>
          <td>Aug 28, 2013</td>
          <td>123456</td>
        </tr>
        <tr>
          <td>Table Item 2</td>
          <td>Aug 25, 2013</td>
          <td>789012</td>
        </tr>
        <tr>
          <td>Table Item 3</td>
          <td>Jul 14, 2013</td>
          <td>345678</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="tab-pane">
  </div>
  <div class="tab-pane">
  </div>
</div>
```
  </div>
</div>
