# webber, previously 'openWebFilesInsteadOfLocalSave' (companion of [dataCentricFileExplorer](https://github.com/steltenpower/dataCentricFileExplorer))
Browser extension: ignore HTTPheader content-disposition:attachment; for the combinations of MIMEtype&URL you set.
If possible make a difference between files manually opened and those by other files (maybe based on whether a window object is in context)

# usecase

Say someone saves stuff on a network drive from within Excel, and that is sort of the top of what this person is capable of doing technically (either by skill, time, interest, or what sysadmin allows).
The network drive has a webinterface too. Still people keep explaining each other where files are located in the file explorer, instead of sending links you can click.
Now you as a web-dataviz person (but without all the access of the busy sysadmins) did interest that person (and other persons doing entry of the same type of data) into some of the dataviz examples you've shown, but doesn't want this to turn into a mail back-and-forth recurring job with a risk of version hell. The 'data entry person' was interested in being able to view by anybody (who is allowed by login) on any device, also when Excel is not available there.
With a dataviz URL that has the dataURL as a parameter, multiple data files can be edited and the moment the dataviz runs it uses the last saved version of the data.
Many client-side web visualisation libraries need .csv files, not Excel. "Save as .csv" is no rocket science however.
The dataviz (automatically, as it's client-side) can only load the data if the person loading it, has viewing rights to the data used.
Of course everybody needs to install the browser extension this is about, but people can be pointed there by the then-not-working-dataviz.
The spreadsheet structure needed for these datavisualisations, brings more advantages at the same time.

Can Office365 serve files, or only 'enhanced' by wrapping them in some webbased viewer?

When with this way succesful dataviz are created of the D3js type, they can easily be used in PowerBI and Excel (through E2D3)

extra: it could also direct people to how to get to these files over for example webDAV; how to install/configure and what path for a file (on hover)
