---
title: Progress Bars
id: progress-bars
index: 11
collection: ui-components
adherence: 1
---
<div class="row">
  <div class="col-md-3">
    <p>Progress bars visually communicate activity, status and percentage.</p>

    <h3>When to use</h3>
    <ul>
      <li><a href="#progress-bars">Basic Progress Bars</a> can be used when a metric can be expressed in terms of amount consumed versus total amount</li>
      <li><a href="#multi-step-process">Multi-Step Progress Bars</a> are good for representing a user's position in a multi-step process as well as the activity and status of each step. </li>
    </ul>
    <h3>How it works</h3>
    <ul>
      <li>Use <a href="#status-indicators">status colors</a> to reflect the parent entity's status. This can change throughout the process.</li>
      <ul>
        <li><span style="color:#00a96d; font-weight:bold">Green (OK)</span> state is for processes with no impact on the uptime of a product, like uploading a file.</li>
        <li><span style="color:#ff9d00; font-weight:bold">Yellow (Processing)</span> state shows a user initiated processes, like rebuilding or resizing, that may cause a product to intermittently work.</li>
        <li><span style="color:#c40022; font-weight:bold">Red (Error)</span> state is used to represent a failed process, or to indicate that a device is currently offline.</li>
        <li><span style="color:#1e6ec1; font-weight:bold">Blue (Neutral Info)</span> is for displaying metrics with a neutral status, like showing percent of total.</li>
      </ul>
      <li>Use animating stripes when you need more indication that work is happening in the background.</li>
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
