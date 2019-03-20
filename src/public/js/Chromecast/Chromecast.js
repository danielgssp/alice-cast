chromecast = () =>
{
  const context = cast.framework.CastReceiverContext.getInstance().setLoggerLevel(cast.framework.LoggerLevel.DEBUG);
  const CHANNEL = 'urn:x-cast:com.solinftec.alice';
  
  debugger;
  context.addCustomMessageListener(CHANNEL, customEvent => 
  {
    console.log(customEvent.data);
    document.getElementById("main").innerHTML = customEvent.data.msg;

    context.sendCustomMessage(CHANNEL, customEvent.senderId, 
    {
      message: 'Hello'
    });
  });

};