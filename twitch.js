$("body").on("DOMNodeInserted", ".chat-lines", function() {
	var i = $(".chat-line:last-child .from");
	var j = $(".chat-line:last-child .message");
	
	if((i.text().toLowerCase() == "beamlink" ||
	i.text().toLowerCase() == "beamlinkdev") &&
	j.html().slice(0, 1) == "[") {
		i.html("<img src='https://beam.pro/img/favicon/favicon-16x16.png' style='margin-right: 6px;'>" + j.html().slice(1, j.html().indexOf("]")));
		i.css("color", "#37e4ee");
		j.html(j.html().slice(j.html().indexOf("]") + 2));
	}
});
