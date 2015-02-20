# canon-bootstrap

[![Build Status](http://img.shields.io/travis/rackerlabs/canon-bootstrap/master.svg)](https://travis-ci.org/rackerlabs/canon-bootstrap)

**WARNING: Canon Bootstrap is a work-in-progress. This theme is currently
incomplete, and you'll find many Bootstrap components that have not been styled
to match Canon. The API should not be considered stable until v1.0 is released.**

Canon Bootstrap is a theme for [Twitter Bootstrap](http://getbootstrap.com)
based on [Canon](http://rackerlabs.github.io/canon/)'s visual design.

## Getting Started

Quickly install canon-bootstrap using Bower:

- bower: `bower install canon-bootstrap`

The installed package includes the entire Bootstrap source, Glyphicons, and all
theme-specific customizations. We provide compiled CSS (`canon-bootstrap.css`)
along with minified CSS (`canon-bootstrap.min.css`).

## Contributing

Have a bug or feature request? The [issue tracker](https://github.com/rackerlabs/canon-bootstrap/issues)
is the preferred channel for discussing bugs and feature requests. Additionally,
feel free to come chat with us in `#canon-dev` on `irc.freenode.net`. For more
information about contributing, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Developing

Canon Bootstrap requires the following dependencies:

- Node.js v0.10 or higher

Once all dependencies are installed, begin development with the following
commands:

```
$ git clone https://github.com/rackerlabs/canon-bootstrap
$ cd canon-bootstrap
$ npm install
$ npm start
```

Visit `http://0.0.0.0:8000` to see documentation and a live demo of
canon-bootstrap. If you have the LiveReload browser plugin installed, the demo
will automatically update as you make changes to the source code.
