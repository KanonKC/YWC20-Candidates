import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
