$("body").on("DOMNodeInserted", "beam-chat-messages div", function() {
	var i = $("beam-chat-message:last beam-chat-author");
	var j = $("beam-chat-message:last .body span span");

	if(i.text().toLowerCase() == "beamlink") {
		setTimeout(function(){
			var jhtml = j.html().trim();
			if(jhtml.slice(0, 1) == "[") {
				i.html("<img src='https://www.twitch.tv/favicon.ico' style='margin-right: 10px;'><b>" + j.html().slice(1, j.html().indexOf("]"))+"</b>");
				i.css("color", "#9b72ca");
				i.parent().css("padding-left", "5px");
				j.html(jhtml.slice(jhtml.indexOf("]") + 2));
			}
		}, 1);
	}
});