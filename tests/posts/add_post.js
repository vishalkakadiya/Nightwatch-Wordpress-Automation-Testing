module.exports = {
	'Add post demo' : function (browser) {
		browser
			.url('http://vk-test.com/wp-admin/')
			.waitForElementVisible('body', 1000)
			.setValue('input[name=log]', 'vishal')
			.setValue('input[name=pwd]', 'Fedor@10')
			.click('input[name=wp-submit]')
			.click('#menu-posts a')
			.click('.add-new-h2')
			.setValue('#title-prompt-text', 'Nightwatch Test Title')
			.setValue('#content', 'Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser 							based apps and websites. ')
			.click('#set-post-thumbnail')
			.pause(1000)
			.setValue('input[type="file"]', require('path').resolve(__dirname + '/Amazing-Abstract-1600x800.jpg')) // Works
			.pause(5000)
			.click('.thumbnail')
			.click('.media-button-select')
			.pause(10000)
	}
};
