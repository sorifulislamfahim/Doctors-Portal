import React from 'react';
import Banar from '../Banar/Banar';
import Contact from '../Contact/Contact';
import ExcepCard from '../ExceptionCard/ExcepCard';
import InfoCards from '../InfoCards/InfoCards';
import MakeApp from '../MakeApp/MakeApp';
import Pataints from '../Pataints/Pataints';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banar></Banar>
           <InfoCards></InfoCards>
           <Services></Services>
           <ExcepCard></ExcepCard>
           <MakeApp></MakeApp>
           <Pataints></Pataints>
           <Contact></Contact>
        </div>
    );
};

export default Home;