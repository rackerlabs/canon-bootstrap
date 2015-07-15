---
title: Fluid Grid
id: fluid-grid
index: 1
collection: app-layout
---
<div class="row">
  <div class="col-md-3">
    <h3>How it works</h3>
    <p>Canon predefines options for page layout via the <a href="#content-area">content area</a> styles but sometimes a grid system is needed for content within those sections or for custom layouts. As such, Canon includes a responsive 12 column fluid grid.</p>
    <ul>
      <li>Create a grid row with the <code>rs-row</code> class</li>
      <li>Add the appropriate number of <code>span-*</code> columns. As this is a 12-column grid, each <code>span-*</code> spans a number of those 12 columns, and should always add up to 12 for each row</li>
      <li>The column gutters can be removed by using <code>rs-row-collapse</code> as the row class</li>
      <li>Offsets can be applied with <code>offset-*</code></li>
      <li>Nest grids by adding a new row and columns within a <code>span-*</code> column</li>
    </ul>
    <p><b>Responsive Options</b></p>
    <ul>
      <li>The default <code>span-*</code> columns stack vertically for viewports under 768px</li>
      <li>To prevent vertical stacking use <code>small-span-*</code> column classes</li>
    </ul>
  </div>
  <div class="col-md-9">
    <h4>Content</h4>
  </div>
</div>
