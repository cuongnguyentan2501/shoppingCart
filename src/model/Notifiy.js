import { NotificationManager} from 'react-notifications';
export const createNotification=(type)=> {
    
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
            console.log('asdsad');
          NotificationManager.success('Add Success', 'Title here',3000);
          break;
        case 'warning':
          NotificationManager.warning('Update Success', 'Title here', 3000);
          break;
        case 'error':
          NotificationManager.error('Delete Success', 'Title here', 3000);
          break;
          default:break;
      }
  };