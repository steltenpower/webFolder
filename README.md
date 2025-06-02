# webFolder

(will add what I have working on NextCloud soon. Current code here works/worked) on a more plain webinterface for a network drive)

Browser extension: ignore HTTPheader content-disposition:attachment; for the combinations of MIMEtype&URL you set.
If possible make a difference between files manually opened and those by other files (maybe based on whether a window object is in context)
<img src="https://repository-images.githubusercontent.com/55097020/c7cb4300-724c-11eb-9fe0-ac3ba7bb375f">
# usecase

Say someone saves stuff on a network drive from within Excel, and that is sort of the top of what this person is capable of doing technically (either by skill, time, interest, or what sysadmin allows).
The network drive has a webinterface too. Still people keep explaining each other where files are located in the file explorer, instead of sending links you can click.
Now you as a web-dataviz person (but without all the access of the busy sysadmins) did interest that person (and other persons doing entry of the same type of data) into some of the dataviz examples you've shown, but doesn't want this to turn into a mail back-and-forth recurring job with a risk of version hell. The 'data entry person' was interested in being able to having it viewable by anybody (who is allowed by login) on any device, also when Excel is not available there.
With a dataviz URL that has the dataURL as a parameter, multiple data files can be edited and the moment the dataviz runs it uses the last saved version of the data.
Many client-side web visualisation libraries need .csv files, not Excel. "Save as .csv" is no rocket science however.
The dataviz (automatically, as it's client-side) can only load the data if the person loading it has viewing rights to the data used.
Of course everybody needs to install the browser extension this is about, but people can be pointed there by the then-not-working-dataviz.
The structure needed for these datavisualisations, helps people improve their spreadsheets for other purposes too.

#remarks
When D3js is used, the dataviz can easily be used in PowerBI and Excel (through E2D3).
It could tell people about webDAV and how to install/configure that.
Have the extension to install on the webdrive for everybody

Can Office365 serve files, or only 'enhanced' by wrapping them in some webbased viewer?

(possible companion of [dataCentricFileExploring](https://github.com/steltenpower/dataCentricFileExploring))

Also see:

- [tabFS](https://mobile.twitter.com/anildash/status/1345594000162566144): "apply all the existing tools on your computer that already know how to deal with files -- terminal commands, scripting languages, point-and-click explorers, etc -- and use them to control and communicate with your browser"

- [fix Outlook safe-links](https://chrome.google.com/webstore/detail/un-safelink-outlook/pgchfppjhohfigdgfnglmbbeiingokmi)

[eesel.app](https://eesel.app)
