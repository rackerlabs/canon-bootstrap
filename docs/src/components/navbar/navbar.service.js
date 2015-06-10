'use strict';

angular.module('docs')
  .service('nav', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var nav = this;

    nav.topnav = [
      {
        'title': '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>',
        'subtitle': 'A front-end framework for fast & consistent development of Rackspace UIs.',
        'link': '/'
      },
      {
        'title': 'Get Started',
        'subtitle': 'Easy setup & access to CDN versioning.',
        'link': '/getstarted'
      },
      {
        'title': 'App Layout',
        'subtitle': 'Fundamental markup for a Rackspace branded experience.',
        'link': '/applayout',
        'subnav': ['Summary', 'Fluid Grid', 'Header & Navigation', 'Content Area', 'Footer']
      },
      {
        'title': 'UX Patterns',
        'subtitle': 'Combined UI components to solve common design problems.',
        'link': '/uxpatterns',
        'subnav': ['Summary', 'Navigation Model', 'List View', 'Create View', 'Detail View']
      },
      {
        'title': 'UI Components',
        'subtitle': 'Reusable elements built to meet basic web app needs.',
        'link': '/uicomponents',
        'subnav': ['Summary', 'Typography', 'Buttons', 'Popover', 'Dropdowns', 'Tables', 'Facets', 'Details', 'Forms', 'Tabs', 'Status Indicators', 'Progress Bars', 'Tooltips']
      },
      {
        'title': 'About Canon',
        'subtitle': 'Overview of the project, our mission, and how to get involved.',
        'link': '/about'
      }
    ];

  });
