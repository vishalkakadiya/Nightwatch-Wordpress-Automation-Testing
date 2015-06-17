module.exports = {
	'Demo test Google' : function (browser) {
		browser
			.url('http://vk-test.com/2015/05/28/hello-world/')
			.waitForElementVisible('body', 1000)
			//.setValue('input[type=search]', 'nightwatch')
			.waitForElementVisible('h1[class=entry-title]', 100)
			.getText('h1[class=entry-title]', function(result) {
				console.log(result.value);
			})
			.getLog('browser', function(result) {
				console.log('Word is Here :  ' + result);
			})
			//.setValue('div[class=entry-content] p', result.value)
			//.pause(1000)
			//.assert.containsText('#main', 'Night Watch')
			.end()
	}
};
