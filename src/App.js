import {
  Route, 
  Routes,
  useLocation,
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Initiatives from './components/pages/Initiatives';
import Mentoring from './components/pages/Mentoring';
import ContactForm from './components/pages/ContactMe';
import ReactGA from "react-ga";
import { useEffect } from 'react';

const id = "G-HSSBJKWVZW";
ReactGA.initialize(id);

const App = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('projects').path} 
            element={<Projects />} 
          />
          <Route 
            path={pages.get('initiatives').path} 
            element={<Initiatives />} 
          />
          <Route 
            path={pages.get('mentoring').path} 
            element={<Mentoring />} 
          />
          <Route path={pages.get('contactme').path} element={<ContactForm />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
