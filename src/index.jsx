import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider as LangProvider } from "./Context/LanguageContext";
import {Provider as ThemeProvider} from './Context/ThemContext';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <LangProvider>
        <ThemeProvider>
           <App />
        </ThemeProvider>
      </LangProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);
