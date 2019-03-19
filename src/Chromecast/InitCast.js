function initCast(){
  var ctx = cast.framework.CastReceiverContext.getInstance();
  var options = new cast.framework.CastReceiverOptions();
  var CHANNEL = 'urn:x-cast:com.solinftec.alice';

  //receiver message of send app
  options.customNamespaces = Object.assign({});
  options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;
  ctx.addCustomMessageListener(CHANNEL, function(customEvent) {
    var message = customEvent.data
    console.log("Message received from " + 
                "[" +  customEvent.senderId +  "] " +
                ": " + message);
    document.getElementById("main").innerHTML = message;
  });

  //send message to send app
  context.sendCustomMessage(CUSTOM_NS, {
    type: 'status',
    message: 'Playing'
  });

  ctx.start(options);
};