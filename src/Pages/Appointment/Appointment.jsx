import React from 'react';
import AppointmentHeader from "../../Components/Frontend/Appointment/AppointmentHeader";
import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import AvailableAppointment from "../../Components/Frontend/Appointment/AvailableAppointment";

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <PageLayout>
            <div className='appointmentPageContainer'>
                <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
                <AvailableAppointment date={date}></AvailableAppointment>
            </div>
        </PageLayout>

    );
};

export default Appointment;