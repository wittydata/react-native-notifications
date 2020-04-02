import { Commands } from './commands/Commands';

export class NotificationsAndroid {
  constructor(private readonly commands: Commands) {
    
  }

  /**
  * Refresh FCM token
  */
  public registerRemoteNotifications() {
    this.commands.refreshToken();
  }
}
