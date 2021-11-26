import { toast } from 'react-toastify';

const useNotification = () =>{

    const successNotify = (success) =>{
        toast.success('User Create Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    //Password Match Error
    const passWordError = () =>{
        toast.error('Your Password Not Match', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    // User Create success
    const userCreate = () =>{
        toast.success('User Create Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // Book An Appointment success
    const userBookAppointment = () =>{
        toast.success('Your Appointment Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // User Login success
    const userLogin = () =>{
        toast.success('User Login Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // User Login success
    const userLogout = () =>{
        toast.success('User Logout Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    // Make Admin Notification
    const userMakeAdmin = () =>{
        toast.success('Admin Create Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    // Make Admin Notification
    const userPayment = () =>{
        toast.success('Your payment  Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    // Error Notify
    const errorNotify = (error) =>{
        toast.error(error ? error : 'Something Wrong try again, thank you', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return {successNotify,errorNotify,userPayment,passWordError, userCreate, userLogin, userLogout, userBookAppointment, userMakeAdmin}
}
export default useNotification