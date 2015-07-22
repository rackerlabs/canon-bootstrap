---
title: Details
id: details
index: 7
collection: ui-components
adherence: 1
---
<div class="row">
  <div class="col-md-3">
    <h3>When to use</h3>
    <p>Use this to display details about a single item or product. Combine this component with the <a href="#action-buttons">action button</a>, <a href="#action-dropdown">action dropdown</a>, <a href="#status-indicators">status indicator, <a href="#embedded-table">embedded tables</a>, and <a href="#popover">popovers</a>. For more information on how to combine components, use the <a href="/ux-patterns/#detail-view">Detail View Pattern</a>. </p>
    <p>The content of a details component is broken into 2 main parts: The <strong>details header</strong> summarizes the item you are viewing. The <strong>details sections</strong> are sub-sections that display status, technical specifications, settings, or tables of data about the product. These are often combined with editable actions that spawn popovers.</p>
    <h5>Details Header</h5>
    <ul>
      <li>Grey text shows the category of the product.</li>
      <li>Primary text shows the name of the product.</li>
      <li>Include tags (if applicable).</li>
    </ul>
    <h5>Details Sections</h5>
    <ul>
      <li>The section header should identify the type of content within the sub-section.</li>
      <li>This pattern is built to be used with content like key / value lists, <a href="#embedded-table">embedded tables</a>, etc.</li>
      <li>The entity's <a href="#status-indicators">status</a> should always be the first item in the key / value list.</li>
      <li>When key / value items are editable, use <a href="#edit-button">edit buttons</a> to open a popover, modal or new page to update.</li>
    </ul>
    <h4>Adherence Rating: {{ adherence }}</h4>
  </div>
  <div class="col-md-9">
    <h4>Markup</h4>
```html
   <div>Coming soon...</div>
```
  </div>
</div>
