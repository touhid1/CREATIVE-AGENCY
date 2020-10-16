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
            <FamousCompany/>
            <Services/>
            <Works/>
            <ClientsFeedback/>
            <ProjectForm/>
        </main>
    );
};

export default Home;