function initCast(){
  var ctx = cast.framework.CastReceiverContext.getInstance();
  var options = new cast.framework.CastReceiverOptions();
  var CHANNEL = 'urn:x-cast:com.solinftec.alice';

  ctx.sendCustomMessage(CHANNEL, {
    type: 'status',
    message: 'aehehehheheheh'
  });

  ctx.start(options);
};