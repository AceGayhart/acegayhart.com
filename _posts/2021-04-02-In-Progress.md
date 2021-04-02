---
title: In Progress
date: 2021-04-02 05:29:26 PM -0400
---
I am still working on my blog.  In fact, my to-do list keeps getting longer:

- [ ] Styling / theming
- [ ] Migration of old posts
- [ ] Date formatting
- [ ] Pagination
- [ ] About page
- [ ] Coding block styling
- [ ] Navigation

I am sure there is more on my list.  But, I'm also trying to be perfect and focus more on generating content.  

When I first started my blog, I *think* I just had a static site.  Eventually, I created an app that would generate pages.  Then, I moved to the content management system (CMS) Drupal.   Using a CMS facilitated my writing.  But, I think I spent more time tinkering than writing.

Most of the Drupal upgrades went smoothly.  But one of them went horribly awry.  Sure, I had a database backup and *could* restore the content.  But, I was frustrated enough that I ended up scrapping the site.

Currently, I am using [Jekyll](https://jekyllrb.com/) to generate my site.  I am using [GitHub](https://gitub.com) to host [my repo](https://github.com/AceGayhart/acegayhart.com) as well as to deliver the actual content.  Since I am working through some [AWS training](https://aws.amazon.com/), I thought about publishing it there.  

AWS works well for my meeting site:  It is a static site in an [S3](https://aws.amazon.com/s3/) bucket using [CloudFront](https://aws.amazon.com/cloudfront/) to deliver the content.  Finally, it uses [Google Domains](https://domains.google/) for that domain.  AWS would have been a good solution for hosting as well.  But, I am leary about unconstrained costs.  

Using my current setup gives me more experience with Git and GitHub.  I like that publishing updates is a simple as doing a `git commit` followed by a `git push`.  With the bulk of content written using [Markdown](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf), I don't have to worry much about formatting.  Besides, all my blog posts are readable even without the conversion to HTML.

Even though I started with [Notepad++](https://notepad-plus-plus.org/), I have been using [Visual Studio Code](https://code.visualstudio.com/) for most of my writing.  It is a decent editor, not to mention its Git support.