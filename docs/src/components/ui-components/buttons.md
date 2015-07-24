---
title: Buttons
id: buttons
index: 2
collection: ui-components
adherance: 2
---
<div class="row">
  <div class="col-md-3">
    <h3>How it works</h3>
    <p>Use these styles to visually distinguish between actions, making it clear to users which action they are performing.</p>
    <ul>
      <li><a href="#primary-buttons">Primary Buttons</a></li>
      <li><a href="#secondary-buttons">Secondary Buttons</a></li>
      <li><a href="#action-buttons">Action Buttons</a></li>
      <li><a href="#login-buttons">Login Buttons</a></li>
      <li><a href="#cancel-links">Cancel Links</a></li>
      <li><a href="#action-cogs">Action Cogs</a></li>
      <li><a href="#delete-buttons">Delete Buttons</a></li>
      <li><a href="#edit-button">Edit Buttons</a></li>
      <li><a href="#plus-button">Plus Buttons</a></li>
    </ul>
    <h3>Guidelines for use</h3>
    <ul>
      <li><a href="#button-groups">Button groups</a> should be used to submit forms and should contain a cancel link.</li>
      <li>Never shown/hide buttons dynamically. Instead, disable/enable buttons using the "disabled" attribute on the button.</li>
      <li>Learn more about button best practices from our <a href="#button-research">design research</a>.</li>
    </ul>
    <h4>Adherence Rating: {{ adherance }}</h4>
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
            <td>rs-btn rs-btn-primary</td>
            <td>
              ```html
                 <button class="btn btn-primary">Primary</button>
              ```
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-secondary">Secondary</button>
            </td>
            <td>rs-btn</td>
            <td>
              ```html
                <button class="btn btn-secondary">Secondary</button>
              ```
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" class="btn btn-default">
                 <span class="fa fa-cog"></span> Action <span class="caret"></span>
              </button>
            </td>
            <td>rs-btn rs-btn-action</td>
            <td>
              ```html
      <button type="button" class="btn btn-default">
        <span class="fa fa-cog"></span>
        Action
        <span class="caret"></span>
      </button>
              ```
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-login">Login</button>
            </td>
            <td>rs-btn rs-btn-login</td>
            <td>
              ```html
                <button class="btn btn-login">Login</button>
              ```
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-link">Link</button>
            </td>
            <td>rs-btn rs-btn-link</td>
            <td>
              ```html
                <button class="btn btn-link">Link</button>
              ```
            </td>
          </tr>
          <tr>
            <td>
              <button class="fa fa-cog"></button>
            </td>
            <td>rs-cog</td>
            <td>
              ```html
                <button class="fa fa-cog"></button>
              ```
            </td>
          </tr>
          <tr>
            <td>
              <button class="fa fa-minus-circle"></button>
            </td>
            <td>rs-delete</td>
            <td>
              ```html
              <button class="fa fa-minus-circle"></button>
              ```

            </td>
          </tr>
          <tr>
            <td>
              <button class="fa fa-edit"></button>
            </td>
            <td>rs-edit</td>
            <td>
              ```html
                <button class="fa fa-cog"></button>
              ```

            </td>
          </tr>
          <tr>
            <td>
              <button class="fa fa-plus-square-o"></button>
            </td>
            <td>rs-plus</td>
            <td>
              ```html
              <button class="fa fa-plus-square-o"></button>
              ```
            </td>
          </tr>
        </tbody>
      </table>

    </div>
</div>
