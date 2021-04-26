---
title: Remote Reboot
date: 2021-04-26 10:36:27 AM
tags:
    - technology
    - RDP
    - batch        
---
When I'm done with the workday, I like to reboot my work computer.  This gives me a clean slate to start the day.  It also makes it easier for the networking team to push out workstation updates during off-hours.

While working remotely, I'm often connected to my machine via RDP.  So, I'm still restarting my workstation.  However, I'm more leary about accidentally choose the "shut down" option instead.  When I was in the office, I could just sign loudly, wait for the machine to power off, and then power it back on before I left for the day.

Being remote makes this more of a challenge.  I'm positive that I could disable the "shut down" option for RDP connections.  But I didn't want to drive to the office just to turn on my computer in case I borked one of the registry entries.  While we generally have someone on-site to restart machines, I would prefer if they didn't have to.

I settled on a one-line batch file saved to my desktop:

```dos
%windir%\System32\shutdown.exe
    /r /t 20 /d p:0:0 /c "Rebooting in 20 seconds.  Type 'shutdown /a' to abort."
```

This gives me a quick way to trigger a reboot.  It is also easy to abort a shutdown down if I make a mistake.  I just press `Win+R` and type `shutdown /a`.

I use a similar trick to shut down my home computer.  I have a scheduled task that runs every weekday at 11:00 PM.  I varied the parameters to shut down the computer instead of rebooting.  I also gave myself 2 minutes to abort in case I'm in the middle of something:

```dos
/s /t 120 /d p:0:0 /c "Nightly shutdown in 120 seconds.  Type 'shutdown /a' to abort.
```
