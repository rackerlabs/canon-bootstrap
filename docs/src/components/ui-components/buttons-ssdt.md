---
title: Same Styles, Different Tags
id: buttons-ssdt
index: 2.92
collection: ui-components
adherance: 2
---
<div class="row">
  <div class="col-md-3">
        <p>Use the tag that works best within your application and development standards.</p>
        <ul>
          <li>Each of the six button styles can be applied to any tag using the .rs-btn class</li>
          <li>Typically, you will use button styles with the &lt;button&gt;,  &lt;input&gt;, and &lt;a&gt; tags</li>
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
            <button class="btn btn-default">Default</button>
          </td>
          <td>button</td>
          <td>
            ```html
               <button class="btn btn-default">Default</button>
            ```
          </td>
        </tr>
        <tr>
          <td>
            <input class="btn btn-default" type="button" value="Default Button">
          </td>
          <td>input</td>
          <td>
            ```html
            <input class="btn btn-default" type="button" value="Default Button">
            ```
          </td>
        </tr>
        <tr>
          <td>
            <a class="btn btn-default">Default Button</a>
          </td>
          <td>a</td>
          <td>
            ```html
            <a class="btn btn-default">Default Button</a>
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
