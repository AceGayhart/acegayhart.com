---
title: Docker Tutorial Troubleshooting
date: 2021-10-13 10:10:45 PM
tags:
    - work
    - docker
    - asp.net

---

My new job doesn't start for several days.  And, while I am spending some of my time teaching and relaxing, I don't want to be completely idle.  So, I've been spending part of my days either learning new technologies or reacquainting myself with technologies I haven't used for a bit.  

Recently, I've been exploring Docker.  I got the application installed and running.  However, after running the getting started application (`docker run -d -p 80:80 docker/getting-started`), I kept getting the following error:

~~~text
400 Bad Request
Request Header Or Cookie Too Large
----------------------------------
nginx/1.21.0
~~~

Well, at least I was getting *some* response.  Since this was a newly installed container, I  expected it to just work.  Also, since I was accessing the container through a standard web browser, I didn't expect the request header or the cookies to be too large.

I went down a small rabbit hole  trying to debug the application.  While I learned a bunch of new docker commands and tried my hand at debugging in a new environment, it didn't resolve my issue.

Eventually, I launched a copy of Fiddler so that I could see the raw request.  While the request header looked normal, it sent a bunch more cookies than I had expected for something running on localhost.

Of course, as soon as I saw the first cookie, I realized what had happened:  I currently teach an ASP.NET MVC Core class.  What this means is I run a lot of student applications.  But, since all those applications run on localhost, I had tons of extraneous ASP.NET cookies.  Once I removed all the cookies, the Docker tutorial worked as expected. 😀
