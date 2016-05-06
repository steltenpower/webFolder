chrome.webRequest.onHeadersReceived.addListener(function(details) {
	var return_value, response_headers, get_header_value, target_content_types, hv_content_type, hv_content_disposition;
	var debug_enabled, debug;

	debug_enabled = false;
	debug = function(msg){
		if (debug_enabled){
			console.log('[onHeadersReceived]: ' + msg);
		}
	};

	debug('entered..');

	return_value = {};
	response_headers = details.responseHeaders;

	get_header_value = function(header_name){
		var is_header, header_obj, header_value, header_index;

		is_header = function(header, index){
			var is_match = (header.name.toLowerCase() === header_name);
			if (is_match){header_index = index;}
			return is_match;
		};

		header_name = header_name.toLowerCase();
		header_index = -1;
		if (typeof Array.prototype.find === 'function'){
			header_obj = response_headers.find(is_header);
		}
		else {
			header_obj = response_headers.filter(is_header);
			header_obj = (header_obj.length === 0)? undefined : header_obj[0];
		}
		header_value = (typeof header_obj === 'undefined')? '' : header_obj.value.toLowerCase();

		return [header_value, header_index];
	};

	target_content_types = ["text/html","text/plain","text/xml","text/csv","text/tsv","text/javascript","application/javascript","application/json","application/xml","image/svg+xml","font/opentype"];
	hv_content_type = get_header_value('content-type');
	debug('content-type = ' + hv_content_type[0]);

	if (target_content_types.indexOf(hv_content_type[0]) !== -1){
		// response matches a target content-type
		debug('content-type is a match');

		hv_content_disposition = get_header_value('content-disposition');
		if (hv_content_disposition[1] !== -1){
			debug('content-disposition = ' + hv_content_disposition[0]);

		//	response_headers[hv_content_disposition[1]]['value'] = 'inline';
			response_headers.splice(hv_content_disposition[1], 1);
			return_value.responseHeaders = response_headers;

			debug('response_headers = ' + JSON.stringify(response_headers));
		}
	}

	return return_value;
}, {"urls": ["*://something.nl/*", "*://*.something.nl/*"]}, ["blocking", "responseHeaders"]);