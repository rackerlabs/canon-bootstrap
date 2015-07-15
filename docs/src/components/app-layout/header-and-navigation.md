---
title: Header and Navigation
id: header-and-navigation
index: 2
collection: app-layout
adherence: 3
---
<div class="row">
  <div class="col-md-3">
    <h3>Types of Navigation</h3>
    <b>Utility Navigation:</b>
    <ul>
      <li>Top-right: Used for utilities like Account information, Support links, Logout, etc</li>
      <li>Top-left: Used to SSO between Rackspace properties.</li>
      <li>Remains consistent across the UIs that it links together</li>
      <li>Highlight the current application with an active state so users know where they are.</li>
    </ul>
    <b>Primary Navigation:</b>
    <ul>
      <li>Customize these sections for your application's categories or products.</li>
      <li>Highlight the category with an active state so users know what section they are in.</li>
      <li>Use <a href="/ui-components/#dropdowns">dropdowns</a> when you have 3 or more levels of information/navigation.</li>
    </ul>
    <b>Secondary Navigation:</b>
    <ul>
    	<li>Highlight the section with an active state so users know what sub-section they are in.</li>
    </ul>
    <h4>Adherence Rating: {{ adherence }}</h4>
  </div>
  <div class="col-md-9">
    <h4>Content</h4>
  </div>
</div>
