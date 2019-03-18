function initCast(){
  var ctx = cast.framework.CastReceiverContext.getInstance();
  var options = new cast.framework.CastReceiverOptions();
  var CHANNEL = 'urn:x-cast:com.solinftec.alice';

  options.customNamespaces = Object.assign({});
  options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;
  
  ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
    var message = JSON.stringify(customEvent.data)
    console.log("Message received from " + 
                "[" +  customEvent.senderId +  "] " +
                ": " + message);
    document.getElementById("main").innerHTML = message;
  });

  ctx.start(options);
};