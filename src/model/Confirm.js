import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const confirmAlertFunc=(dispatch,deleteFromCart,item)=>(
    confirmAlert({
        title: 'bạn chắc chắn muốn xóa',
        message: 'Are you sure to do this.',
        buttons: [
        {
            label: 'Yes',
            onClick: () => {
                dispatch(deleteFromCart(item));
                
            }
        },
        {
            label: 'No',
            onClick: () => {}
        }
        ]
    })
)