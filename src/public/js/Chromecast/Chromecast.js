import App from '../App';

class Chromecast
{
  constructor ()
  {
    this.context = cast.framework.CastReceiverContext.getInstance();
    this.CHANNEL = 'urn:x-cast:com.solinftec.alice';

    this.context.addCustomMessageListener(this.CHANNEL, customEvent => 
    {
      App.managerData(customEvent.data);
    });
  
    this.context.start();
  };
};

export default Chromecast;