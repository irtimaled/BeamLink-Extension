$("body").on("DOMNodeInserted", ".messages .nano-content", function() {
	var i = $(".message:last-child .message-author");
	var j = $(".message:last-child .message-body");
	
	if(i.clone().children().remove().end().text().toLowerCase() == "beamlink" &&
	j.html().slice(0, 1) == "[") {
		$(".message:last-child").removeClass("message-role-BExBot");
		i.html("<img src='http://www.twitch.tv/favicon.ico' style='margin-right: 8px;'>" + j.html().slice(1, j.html().indexOf("]")));
		i.css("color", "#9b72ca");
		j.html(j.html().slice(j.html().indexOf("]") + 2));
	}
});
