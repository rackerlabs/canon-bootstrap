---
title: Login Buttons
id: buttons-login
index: 2.4
collection: ui-components
adherance: 2
---
<div class="row">
  <div class="col-md-3">

    <p>Use on a Rackspace standard login screen.</p>
    <p>Do not use red login buttons as deletion buttons. Delete buttons are commonly found in popovers as <a href="#primary-buttons">primary buttons</a>.</p>

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
            <button class="btn btn-login">Default</button>
          </td>
          <td>btn btn-login</td>
          <td>
            ```html
               <button class="btn btn-login">Default</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-login active">Active</button>
          </td>
          <td>btn btn-login active</td>
          <td>
            ```html
              <button class="rs-btn rs-btn-login active">Active</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-login" disabled="disabled">Disabled</button>
          </td>
          <td>btn btn-login disabled="disabled"</td>
          <td>
            ```html
              <button class="btn btn-login" disabled="disabled">Disabled</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-login hover">Hover</button>
          </td>
          <td>btn btn-primary hover</td>
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
