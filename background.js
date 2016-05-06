chrome.webRequest.onHeadersReceived.addListener(function(details) {
    function isContentType(element) {
        // , index, array
      return element.name.toLowerCase()==='content-type'
    }
    function isContentDisposition(element) {
        // , index, array
      return element.name.toLowerCase()==='content-disposition'
    }
    var headers = details.responseHeaders
    var webContentTypes=["text/html","text/plain","application/javascript","application/json","application/xml","text/xml","image/svg+xml","font/opentype","text/csv","text/tsv"]
    console.log("your Chrome extension IS running")

    if (webContentTypes.includes(headers.find(isContentType).value)){
        var indexCD=headers.findIndex(isContentDisposition)
        if (indexCD!==-1) headers[indexCD].value='inline'
    }

return {responseHeaders:headers};
}, {urls: ['https://*.something.nl/*']}, ["blocking","responseHeaders"]);
