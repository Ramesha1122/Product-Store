import { Box, useColorModeValue } from '@chakra-ui/react'; // Corrected hook usage
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const bgColor = useColorModeValue("gray.100", "gray.900"); // ✅ Fix: Move hook inside function

  return (
    <Box minH="100vh" bg={bgColor}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
