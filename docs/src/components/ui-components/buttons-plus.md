---
title: Plus Buttons
id: buttons-plus
index: 2.91
collection: ui-components
adherance: 2
---
<div class="row">
  <div class="col-md-3">
        <p>Use the rs-plus button in combination with <a href="/ui-components/#monitoring-status-list">Monitoring Status List</a>.</p>
        <ul>
          <li>If there are no checks on a monitoring-enabled device, use the plus button to let users add checks.</li>
          <li>The Plus Button should spawn a <a href="#popover">Popover</a> for creating a check on the device.</li>
          <li>See the <a href="http://rackerlabs.github.io/canon/demos" target="_blank">Cloud Servers list</a> for an example.</li>
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
            <button class="fa fa-plus"></button>
          </td>
          <td>fa fa-plus</td>
          <td>
            ```html
            <button class="fa fa-plus"></button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <button class="fa fa-plus hover"></button>
          </td>
          <td>fa fa-plus hover</td>
          <td>
            ```html
              <button class="fa fa-plus hover"></button>
            ```
          </td>
        </tr>

      </tbody>
    </table>


  </div>
</div>
