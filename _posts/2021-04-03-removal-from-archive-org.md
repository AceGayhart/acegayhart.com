---
title: Removal from Archive.org
date: 2021-04-03 02:22:39 PM 
category: Blogging
tag: blogging
---

I like the [Wayback Machine](https://archive.org/).  It has saved me multiple times when researching an issue only to find that the website is defunct.  But, after deprecating my old site, silverjaguar.com, I wasn't sure if I wanted to have my old posts stay up there.  Perhaps if it was a complete archive, I might have left it there.  Since it wasn't, I decided to remove it.

I did review all the pages that were stored and grabbed some of my old blog posts (which I'll eventually migrate here).  It was interesting to see how I changed as a developer and a person.  Sometimes, it was embarrassing.  Other times, I wondered what happened to *that* person and if they'll return.

The steps to remove were reasonably straightforward.  Fortunately, I still own the domain.  If I hadn't, I'm not sure how much of a pain this might have been.

First, I removed the domain redirect to my [LinkedIn page](https://linkedin.com/in/AceGayhart) and set up a small static website.  Since the Wayback Machine archived non-SSL versions of my site, I ensured that the [http://](http://silverjaguar.com) version was accessible.  I also enabled the [https://](https://silverjaguar.com), [http://www](http://www.silverjaguar.com), and [https://www](https://www.silverjaguar.com) versions for good measure.

Second, I created a robots.txt file:

    User-agent: *
    Disallow: /

    User-agent: archive.org_bot
    Disallow: /

    User-agent: ia_archiver
    Disallow: /

The first section requests that all search engines not index the page.  I added the second two sections because I had seen that on other sites.  It may have been redundant, but I wasn't sure if an automated or manual process would specifically look for it.

Finally, I sent a short email to info@archive.org asking that they remove my site:

> To: info@archive.org
>
> Subject: Removal of silverjaguar.com
>
> Greeting! I would like to remove the archived content for silverjaguar.com and its associated pages. There is a robots.txt file (http://silverjaguar.com/robots.txt) that should prevent crawls/indexing.
>
> I thank you in advance! Please let me know if there is anything you need from me.

The next business day, I received the following response:

> The following has been submitted for exclusion from the Wayback Machine at web.archive.org:
>
> silverjaguar.com
>
> Please allow up to a day for the automated portions of the process to run their course and for the changes to take effect.

One day later, and now when I search, I see, "This URL has been excluded from the Wayback Machine."  The process was much more straightforward than I expected.

Of course, this is a good reminder that things posted on the internet tend to stay there.  I wonder what I'll think of my present self another twenty years from now.