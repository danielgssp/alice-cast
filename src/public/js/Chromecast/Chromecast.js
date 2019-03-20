chromecast = () =>
{
  const context = cast.framework.CastReceiverContext.getInstance()
  const CHANNEL = 'urn:x-cast:com.reactnative.googlecast.example'

  context.addCustomMessageListener(CHANNEL, customEvent => 
  {
    console.log(customEvent.data)

    context.sendCustomMessage(CHANNEL, customEvent.senderId, 
    {
      message: 'Hello',
    });
  });

  context.start();
};