(function(env) {
    env.ddg_spice_brainy_quote = function(api_result) {

        if (!api_result || api_result.error || api_result.author) {
            return Spice.failed('brainy_quote');
        }
	
	if (!DDG.get_query().match(/quotes|quotations/)) {
            Spice.add({
                id: 'brainy_quote',
                name: 'Quotations',
                data: api_result,
                meta: {
                    sourceName: 'Brainy Quote',
                    sourceUrl: api_result.source_url
                },
                signal: 'high',
                normalize: function(item) {
                    return {
                        person: item.header1.replace(/ quote$/, ""),
                        url: item.source_url
                    };
                },
                templates: {
                    group: 'base',
                    options: {
                        content: Spice.brainy_quote.content,
                        moreAt: true
                    }
                }
            });
	} else {
            console.log("will display multiple quotations")
            // Write retrival logic to make multiple calls to api
            // and display results in a list
        }
    };
}(this));
