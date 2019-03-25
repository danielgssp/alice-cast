class Chromecast {
  constructor() {
    this.app = new App();
    this.context = cast.framework.CastReceiverContext.getInstance();
    this.CHANNEL = 'urn:x-cast:com.solinftec.alice';

    this.context.addCustomMessageListener(this.CHANNEL, customEvent => {
      this.app.managerData(customEvent.data);

      this.context.sendCustomMessage(this.CHANNEL, customEvent.senderId, {
        message: 'Started Session'
      });
    });

    this.context.start();
  };
};