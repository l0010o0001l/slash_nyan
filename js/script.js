$(function(){

	var gui = require('nw.gui');
	var ul = $('.flipster ul');

	$.get('http://rss.slashdot.org/Slashdot/slashdotMain', function(response){

		var rss = $(response);

		rss.find('item').each(function(){
			var item = $(this);

			var li = $('<li><a target="_blank"></a></li>');

			li.find('a')
				.attr('href', item.find('link').text())
				.text(item.find("title").text());

			li.appendTo(ul);

		});

		$('.flipster').flipster({
			style: 'carousel'
		});

		$('.flipster').on('click', 'a', function (e) {

			e.preventDefault();
			gui.Shell.openExternal(e.target.href);

		});

	});

});
