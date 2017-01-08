$("body").on("DOMNodeInserted", ".chat-lines", function() {
	var i = $(".chat-line:last-child .from");
	var j = $(".chat-line:last-child .message");

	if(i.text().toLowerCase() == "beamlink") {
		var jhtml = j.html().trim();
		if(jhtml.slice(0, 1) == "[") {
			i.html("<img src='https://beam.pro/_latest/img/favicon/favicon-16x16.png' style='margin-right: 6px;'>" + jhtml.slice(1, jhtml.indexOf("]")));
			i.css("color", "#37e4ee");
			j.html(jhtml.slice(jhtml.indexOf("]") + 2));
		}
	}
});