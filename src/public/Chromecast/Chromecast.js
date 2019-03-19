function chromecast()
{
  const CHANNEL = 'urn:x-cast:com.solinftec.alice';
  const ctx = cast.framework.CastReceiverContext.getInstance();
  const options = new cast.framework.CastReceiverOptions();
  options.customNamespaces = Object.assign({});
  options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;

  ctx.addCustomMessageListener(CHANNEL, function (customEvent){console.log(customEvent.data)});

  ctx.start(options);
};