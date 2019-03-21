class Chromecast
{
  constructor ()
  {
    this.app = new App();
    this.context = cast.framework.CastReceiverContext.getInstance();
    this.CHANNEL = 'urn:x-cast:com.solinftec.alice';

    this.context.addCustomMessageListener(this.CHANNEL, customEvent => 
    {
      document.getElementById("main").innerHTML = customEvent.data.msg;
    });
  
    this.context.start();
  };
};
