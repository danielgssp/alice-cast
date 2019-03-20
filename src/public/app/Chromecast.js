class Chromecast
{
  constructor ()
  {
    this.utils = new Utils();
    this.context = cast.framework.CastReceiverContext.getInstance();
    this.CHANNEL = 'urn:x-cast:com.solinftec.alice';

    this.context.addCustomMessageListener(this.CHANNEL, customEvent => 
    {
      this.utils.managerData(customEvent.data);
    });
  
    this.context.start();
  };
};
