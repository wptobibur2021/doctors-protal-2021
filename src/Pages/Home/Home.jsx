import React from 'react';
import Services from "../../Components/Frontend/Services/Services";
import AppointmentBanner from "../../Components/Frontend/Appointment/AppointmentBanner";
import Banner from "../../Components/Frontend/Banner/Banner";
import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import Doctors from "../../Components/Frontend/Doctors/Doctors";
import QuickInfo from "../../Components/Frontend/QuickInfo/QuickInfo";
import CareDental from "../../Components/Frontend/CareDental/CareDental";
import Testimonial from "../../Components/Frontend/Testimonial/Testimonial";

const Home = () => {
    return (
        <PageLayout>
            <div className="homePageContainer">
                <Banner></Banner>
                <QuickInfo></QuickInfo>
                <Services></Services>
                <CareDental></CareDental>
                <AppointmentBanner></AppointmentBanner>
                <Testimonial></Testimonial>
                <Doctors></Doctors>
            </div>
        </PageLayout>
    );
};

export default Home;