import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { vaasThemeOptions } from './theme/VaasThemeOptions.js';
import MainContainer from './components/MainContainer.js';

const theme = createTheme(vaasThemeOptions);

function App() {
    return (
	    <ThemeProvider theme={theme}>
	    <MainContainer />
	    </ThemeProvider>
  );
}

export default App;
