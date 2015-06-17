module.exports = {
	'Demo test Google' : function (browser) {
		browser
			.url('http://vk-test.com/wp-admin/')
			.waitForElementVisible('body', 1000)
			.setValue('input[name=log]', 'vishal')
			.setValue('input[name=pwd]', 'Fedor@10')
			.click('input[name=wp-submit]')
			.click('div[class=wp-menu-name]')
			
	}
};
