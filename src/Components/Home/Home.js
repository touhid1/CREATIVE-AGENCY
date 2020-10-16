import React from 'react';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import FamousCompany from './FamousCompany/FamousCompany';
import HomeMain from './HomeMain/HomeMain';
import ProjectForm from './ProjectForm/ProjectForm';
import Services from './Services/Services';
import Works from './Works/Works';

const Home = () => {
    return (
        <main>
            <HomeMain/>
            {/* Famous Company */}
            <FamousCompany/>
            {/* Our Services */}
            <Services/>
            {/* Our Works */}
            <Works/>
            {/* Clients Feedback */}
            <ClientsFeedback/>
            {/* Handle Project By Creating A Form */}
            <ProjectForm/>
        </main>
    );
};

export default Home;