import React from 'react';
import Header from '../components/Header/Header';
import TrustedPartners from '../components/TrustedPartners/TrustedPartners';
import CardSection from '../components/CardSection/CardSection';
import dummyData, { section1data, section2data } from '../data/dummyData';
import MintNftSection from '../components/MintNftSection/MintNftSection';
import Card from '../components/MintNftSection/Card';
import Card2 from '../components/MintNftSection/Card2';
import Footer from '../components/Footer/Footer';
import Section4 from '../components/MintNftSection/Section4';
import Section3 from '../components/MintNftSection/Section3';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <TrustedPartners />
      {dummyData.data.map((item, index) => {
        return <CardSection key={index} data={item} />;
      })}

      <MintNftSection
        Card={Card}
        sectionData={section1data}
        cardData={dummyData.data2}
        bgColor='rgba(248, 252, 251, 0.871)'
      />
      <MintNftSection
        Card={Card2}
        sectionData={section2data}
        cardData={dummyData.data3}
        bgColor='#fff'
      />

      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default LandingPage;
