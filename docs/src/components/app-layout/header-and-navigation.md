---
title: Header and Navigation
id: header-and-navigation
index: 2
collection: app-layout
---
<div class="row">
  <div class="col-md-3">
    <h3>Sidebar</h3>
    <p>Some info about the content</p>
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </div>
  <div class="col-md-9">
    <h4>Content</h4>
      <span>Some info about the component</span>

    <h4>Markup</h4>
```html
<div class="page-header">
  <div class="btn-group pull-right">
    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-gear"></i> Action <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li role="presentation" class="dropdown-header">Manage</li>
      <li><a href="#">Action</a></li>
      <li><a href="#">Another action</a></li>
      <li><a href="#">Something else here</a></li>
      <li role="presentation" class="dropdown-header">Monitor</li>
      <li><a href="#">Something else here</a></li>
      <li class="divider"></li>
      <li><a href="#">Separated link</a></li>
    </ul>
  </div>
  <h2>My Cloud Server <small>Cloud Server</small></h2>
</div>
```
  </div>
</div>