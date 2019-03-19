chromecast = () =>
{
  const CHANNEL = 'urn:x-cast:com.solinftec.alice';
  const ctx = cast.framework.CastReceiverContext.getInstance();
  const options = new cast.framework.CastReceiverOptions();
  options.customNamespaces = Object.assign({});
  options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;

  //receiving sender message
  ctx.addCustomMessageListener(CHANNEL,  customEvent => document.getElementById("main").innerHTML = customEvent.data.msg);

  ctx.start(options);
};