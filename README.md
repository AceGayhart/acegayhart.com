# acegayhart.com

This repo is a Jekyll-based blog hosted at <https://acegayhart.com>.

Built with [Jekyll](https://jekyllrb.com/) and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme. Pushing to `main` automatically publishes via GitHub Pages.

## Prerequisites

- [Ruby](https://www.ruby-lang.org/)
- [Bundler](https://bundler.io/) (`gem install bundler`)

## Setup

Install dependencies:

```shell
bundle install
```

## Run Locally

```shell
bundle exec jekyll serve
```

The site will be available at <http://127.0.0.1:4000>.

## Creating a New Post

Add a Markdown file to `_posts/` following the directory and naming convention:

```
_posts/YYYY/MM/DD/YYYY-MM-DD-title-slug.md
```

Each post needs front matter at the top, for example:

```yaml
---
title: "Post Title"
tags:
  - tag1
  - tag2
---
```
