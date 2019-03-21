class Chromecast
{
  constructor ()
  {
    this.app = new App();
    this.context = cast.framework.CastReceiverContext.getInstance();
    this.CHANNEL = 'urn:x-cast:com.solinftec.alice';

    this.context.addCustomMessageListener(this.CHANNEL, customEvent => 
    {
      console.log(customEvent.data);
    });
  
    this.context.start();
  };
};
