---
title: Cancel Buttons
id: buttons-cancel
index: 2.5
collection: ui-components
adherance: 2
---
<div class="row">
  <div class="col-md-3">
      <p>Use for cancelling an action or process.</p>
      <ul>
        <li>Use the rs-btn-link class to align cancel links within <a href="#button-groups">button groups</a>.</li>
        <li>The link styling helps users clearly identify the cancel process and relate it as navigating away from their current activity.</li>
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
            <button class="btn btn-link">Default</button>
          </td>
          <td>btn btn-link</td>
          <td>
            ```html
               <button class="btn btn-link">Default</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-link active">Active</button>
          </td>
          <td>btn btn-link active</td>
          <td>
            ```html
              <button class="rs-btn rs-btn-login active">Active</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-link" disabled="disabled">Disabled</button>
          </td>
          <td>btn btn-link disabled="disabled"</td>
          <td>
            ```html
              <button class="btn btn-link" disabled="disabled">Disabled</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-link hover">Hover</button>
          </td>
          <td>btn btn-link hover</td>
          <td>
            ```html
              <button class="btn btn-login hover">Hover</button>
            ```
          </td>
        </tr>
      </tbody>
    </table>



  </div>
</div>
