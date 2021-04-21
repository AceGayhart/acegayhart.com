---
title: Google Analytics for Subdomains
date: 2021-04-20 11:17:10 PM
tags:    
    - technology
    - google analytics
---

Adding Google Analytics to a site is relatively straightforward.  You create an account, get the tracking code, and add it to your site.  I know that my site is a low-traffic site.  So, tracking page views isn't critical.  But I find it interesting regardless.

I noticed that the domain name wasn't showing in the reports.  So, page views from this site and one of my subdomains used for scheduling meetings showed together.  It would be great if Google Analytics would show the domain to disambiguate the traffic.

1. Fortunately, I found it was pretty easy to implement:
2. In Google Analytics, click the *Admin* link.
3. In the View column, click the *Filters* link.
4. Click the *+ Add Filter* button to bring up the Add Filter to View page.
5. Enter a filter name.  I picked "Show Subdomain."
6. Set the *Filter Type* to "Custom."
7. Select "Advanced."
8. In *Field A --> Extract A*, select "Hostname" and enter `(.*)`.
9. In *Field B --> Extract B*, select "Request URI" and enter `(.*)`.
10. In *Output To -> Constructor*, select "Request URI" and enter `$A1$B1`.
11. Click the *Save* button.

The above filter essentially rewrites the URI shown in Google Analytics to include the hostname.  Instead of seeing "/tag/technology," for example, it will show "acegayhart.com/tag/technology."

Note that this filter does not apply retroactively.  I was able to verify it shows correctly in real-time reports; it may take a day or so for data to accumulate for it to replicate to the other reports.
