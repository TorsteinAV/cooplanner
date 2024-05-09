import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Box1 from './box';
import Box2 from './box';
import Box3 from './box';
import Box4 from './box';
import Box5 from './box';
import Box6 from './box';
import Box7 from './box';
import Box8 from './box';
import Box9 from './box';
import Box10 from './box';
import Box11 from './box';
import Box12 from './box';
import Box13 from './box';
import Box14 from './box';
import Box15 from './box';

import image1 from './assets/images/image1.jpg'; // Import the image
import image2 from './assets/images/image2.jpg'; // Import another image
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';
import image8 from './assets/images/image8.jpg';
import image9 from './assets/images/image9.jpg';
import image10 from './assets/images/image10.jpg';
import image11 from './assets/images/image11.jpg';
import image12 from './assets/images/image12.jpg';
import image13 from './assets/images/image13.jpg';
import image14 from './assets/images/image14.jpg';
import image15 from './assets/images/image15.jpg';

import { db } from './firebase'; // Ensure you have this import

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnjoFHe41aVFXrjbxOMhjnEGsMTGSCcwI",
  authDomain: "cooplaner.firebaseapp.com",
  projectId: "cooplaner",
  storageBucket: "cooplaner.appspot.com",
  messagingSenderId: "1086055360406",
  appId: "1:1086055360406:web:ef8e1fdeae487bd5dadfb7",
  measurementId: "G-ZVBS39WF6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Container = styled.div`
  padding-top: 50px; // Height of the Banner
`;

const Line = styled.div`
    margin: 0;
    padding: 0;
`;

const Banner = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 2px 80px 80px 80px; // Increased top and side padding: ;
  margin-bottom: 60px; // Height of the BottomBar plus padding
  box-sizing: border-box;
`;

const BottomBar = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const MinMenyPage = () => <div>Min meny page</div>;



function App() {
  const handleBoxClick = (boxNumber) => {
    console.log(`Box ${boxNumber} clicked`);

    // Add data to Firestore
    db.collection('clicks').add({
      boxNumber: boxNumber,
      timestamp: new Date()
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  };

  return (
    <Router>
      <Banner>
        <Link to="/minmeny"><button>Min meny</button></Link>
      </Banner>
      <Container>
        <Content>
          <Box1 imgSrc={image1} line1="Blomkålsuppe" onClick={() => handleBoxClick(1)} />
          <Box2 imgSrc={image2} line1="Fiskegrateng" onClick={() => handleBoxClick(2)} />
          <Box3 imgSrc={image3} line1="Kjøttkaker i brunsaus" onClick={() => handleBoxClick(2)} />
          <Box4 imgSrc={image4} line1="Kremet greesskarsuppe" onClick={() => handleBoxClick(2)} />
          <Box5 imgSrc={image5} line1="Kyllingburger" onClick={() => handleBoxClick(2)} />
          {/* Add more boxes as needed */}
        </Content>
        
        <Content>
          <Box6 imgSrc={image6} line1="Lettvint chili con carne" line2="Box 1 Line 2" onClick={() => handleBoxClick(1)} />
          <Box7 imgSrc={image7} line1="Norsk laks med poteter" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          <Box8 imgSrc={image8} line1="Stekte nudler med grønnsaker" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          <Box9 imgSrc={image9} line1="Quesedilla" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          <Box10 imgSrc={image10} line1="Omelett med grønn salat" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          {/* Add more boxes as needed */}
        </Content>
        
        <Content>
          <Box11 imgSrc={image11} line1="Pasta bolognese" line2="Box 1 Line 2" onClick={() => handleBoxClick(1)} />
          <Box12 imgSrc={image12} line1="Pasta carbonara" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          <Box13 imgSrc={image13} line1="Pasta med tomatsaus" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          <Box14 imgSrc={image14} line1="Vegansk chilli con carne" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          <Box15 imgSrc={image15} line1="Vegetartaco med linser og bønner" line2="Box 2 Line 2" onClick={() => handleBoxClick(2)} />
          {/* Add more boxes as needed */}
        </Content>
        
      </Container>
      <BottomBar>
        <Link to="/minmeny"><button>Lag meny</button></Link>
      </BottomBar>
      <Routes>
        <Route path="/minmeny" element={<MinMenyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
