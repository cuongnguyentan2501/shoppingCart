import { NotificationManager} from 'react-notifications';
export const createNotification=(type)=> {
    
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
            console.log('asdsad');
          NotificationManager.success('Success message', 'Title here',3000);
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
          default:break;
      }
  };