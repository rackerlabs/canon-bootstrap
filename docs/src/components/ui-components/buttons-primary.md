---
title: Primary Buttons
id: buttons-primary
index: 2.1
collection: ui-components
adherance: 2
---
<div class="row">
  <div class="col-md-3">

    <p>Use for primary actions, like "Create", "Add", "Confirm", or "Submit". These are commonly found in popovers, <a href="#button-groups">grouped with a cancel link</a>.</p>
    <ul>
      <li>There should be only one primary button in view at one time.</li>
      <li>The primary button should always appear as the top left item in a section or group of buttons.</li>
      <li>Primary buttons aren't required. You can have a group of secondary buttons only.</li>
    </ul>

  </div>
  <div class="col-md-9">
    <h4>Markup</h4>


    <table class="table">
      <thead>
        <tr>
          <th style="width:110px;">Button</th>
          <th>Class</th>
          <th>Markup</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button class="btn btn-primary">Primary</button>
          </td>
          <td>btn btn-primary</td>
          <td>
            ```html
               <button class="btn btn-primary">Primary</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-primary active">Active</button>
          </td>
          <td>btn btn-primary active</td>
          <td>
            ```html
              <button class="rs-btn rs-btn-primary active">Active</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-primary disabled" disabled="disabled">Disabled</button>
          </td>
          <td>btn btn-primary disabled="disabled"</td>
          <td>
            ```html
              <button class="btn btn-primary disabled" disabled="disabled">Disabled</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-primary hover">Hover</button>
          </td>
          <td>btn btn-primary hover</td>
          <td>
            ```html
              <button class="btn btn-primary hover">Hover</button>
            ```
          </td>
        </tr>
      </tbody>
    </table>



  </div>
</div>
