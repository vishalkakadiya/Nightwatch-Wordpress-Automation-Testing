module.exports = {
	'Demo test Google' : function (browser) {
		browser
			.url('http://your_url/wp-admin')
			.waitForElementVisible('body', 1000)
			.setValue('input[name=log]', 'your_username')
			.setValue('input[name=pwd]', 'your_password')
			.click('input[name=wp-submit]')
			.click('div[class=wp-menu-name]')
			
	}
};
