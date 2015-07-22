---
title: Navigation Model
id: navigation-model
index: 1
collection: ux-patterns
---
<div class="row">
  <div class="col-md-3">
    <p>The hub and spoke nav model here describes a flat, simple application architecture. Our model uses three main page types:</p>
    <ul>
      <li><a href="/documentation/ux-patterns.html#list-view">List View</a></li>
      <li><a href="/documentation/ux-patterns.html#detail-view">Detail View</a></li>
      <li><a href="/documentation/ux-patterns.html#create-view">Create View</a></li>
    </ul>
    <p>Actions are kept in context on these pages by way of the <a href="/documentation/ui-components.html#popover">popover component</a>. Building your application to follow this model will help users keep a consistent mental picture of the application structure and ensure they accomplish their goals quickly and intuitively. </p>
    <h3>How it works</h3>
    <ul>
      <li>Each large "hub" is related to a UX Pattern (details below on this page)</li>
      <li>Each "spoke" coming off a hub represents a <a href="{{ site.baseurl }}/ui-components">UI Component</a> within the pattern</li>
      <li>Use <a target="blank" href="/demo">List Views</a> as navigational hubs and for managing and assessing many items</li>
      <li>Use the <a href="/documentation/ux-patterns.html#detail-view">Detail View</a> to present item details and show child items with their own set of actions and details</li>
      <li>Use the <a href="/documentation/ux-patterns.html#create-view">Create View</a> when items have complex configuration settings or need a help section to guide users through the creation process</li>
    </ul>
    <h4>Adherence Rating: 2</h4>
  </div>
  <div class="col-md-9">
    <h3>Content</h3>
    <div class="row">
      <div class="col-md-12">
        <h4>Markup</h4>
    ```html
    <div>Coming soon...</div>
    ```
      </div>
    </div>
  </div>
</div>
