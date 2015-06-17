module.exports = {
	'Add Image Demo' : function (browser) {
		browser
			.url('http://vk-practise.com/wp-admin')
			.waitForElementVisible('body', 1000)
			.setValue('input[name=log]', 'vishal')
			.setValue('input[name=pwd]', 'Fedor@10')
			.click('input[name=wp-submit]')
			.click('#menu-posts a')
			.click('.add-new-h2')
			.setValue('#title-prompt-text', 'Nightwatch Test Title')
			.click('#content-html')
			.setValue('#content', 'Nightwatch is an easy to use Node based End-to-End (E2E) testing solution for browserdfvfmfdobmfdobmfdmbfdimobbbbbbbbbbfkfmbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd dfbmfdkmfdkbm dfhdfkmdmkhdfmkhdfhfd d dfkhmdfkmdfhdmhd dfhdfhfdhfdh  nn   nj jn jnj nj nn n nn jn nnjnnjnjnjnknjnkjnjjk  j njn jk njnjjnj njnjnjknj njnjjjnnjjn fghgfhfhfghgfhgfhgf   hfgh gf h gfh fg h gf hf h fg hgf h f h fg hfg h gf h gfh gf hgf h fgh gfhgfhfghgfhfghfghgf fhgfhgfhfghfhfgh   fghgfhfghgfhfghf')
			.click('#set-post-thumbnail')
			.pause(1000)
			.setValue('input[type="file"]', require('path').resolve(__dirname + '/Amazing-Abstract-1600x800.jpg')) // Works
			.pause(5000)
			.click('.thumbnail')
			.click('.media-button-select')
			.pause(10000)
			.click('a.edit-post-status')
			.setValue('#post_status', 'pending')
			.click('#publish')
	}
};
