$("body").on("DOMNodeInserted", ".chat-lines", function() {
  var chatLine =  $(".chat-line:last-child");
  var i = $(chatLine).find(".from");
  var j = $(chatLine).find(".message");
  if(i.text().toLowerCase() == "chatlinker") {
    var jhtml = j.html().trim();
    if(jhtml.slice(0, 1) == "[") {
      var username = jhtml.slice(1, jhtml.indexOf("]"));
      var message = jhtml.slice(jhtml.indexOf("]") + 2);
      if(username.slice(0, 1) == "/") {
        username = username.slice(1);
        $(chatLine).find(".colon").remove();
        j.css("color", "#37e4ee");
      }
      i.html("<img src='https://beam.pro/_latest/assets/favicons/favicon-32x32.png' style='margin-right: 6px; height: 20px;'><b>"+username+"</b>");
      i.css("color", "#37e4ee");
      j.html(message);
    }
  }
});
