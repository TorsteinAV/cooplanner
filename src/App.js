import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Styled components
const Container = styled.div`
  padding-top: 50px; // Height of the Banner
`;

const Banner = styled.header`
  background-color: #333;
  color: aqua;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 20px;
  margin-bottom: 60px; // Height of the BottomBar plus padding
`;

const Box = styled.div`
  width: 250px;
  height: 375px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  padding: 10px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

const BottomBar = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

// Placeholder for a page component
const MinMenyPage = () => <div>Min meny page</div>;

// Function to handle box clicks
const handleBoxClick = (index) => {
  console.log(`Box ${index + 1} clicked`);
  // You can add navigation or other actions here
};

// Main App component
function App() {
  return (
    <Router>
      <Banner>
        <Link to="/minmeny"><button>Min meny</button></Link>
      </Banner>
      <Container>
        <Content>
          {Array.from({ length: 30 }).map((_, index) => (
             <Box onClick={() => alert('Clicked!')}>
              <img src="https://via.placeholder.com/230x300" alt="Placeholder" />
              <div>Line 1 Text</div>
              <div>Line 2 Text</div>
            </Box>
          ))}
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
