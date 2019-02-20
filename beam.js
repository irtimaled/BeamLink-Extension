$("body").on("DOMNodeInserted", "beam-chat-messages div", function() {
  var beamChatMessage =  $("beam-chat-message:last");
  var i = $(beamChatMessage).find("beam-chat-author");
  var j = $(beamChatMessage).find(".body span span");
  if(i.text().toLowerCase() == "chatlinker") {
    setTimeout(function(){
      var jhtml = j.html().trim();
      if(jhtml.slice(0, 1) == "[") {
        var username = jhtml.slice(1, jhtml.indexOf("]"));
        var message = jhtml.slice(jhtml.indexOf("]") + 2);
        if(username.slice(0, 1) == "/") {
          username = "<i>"+username.slice(1)+"</i>";
          message = "<i>"+message+"</i>";
        }
        else
        {
          username = "<b>"+username+"<b>";
        }
        i.html("<img src='https://www.twitch.tv/favicon.ico' style='margin-right: 10px;'>"+username);
        i.css("color", "#9b72ca");
        i.parent().css("padding-left", "5px");
        j.html(message);
      }
    }, 1);
  }
});