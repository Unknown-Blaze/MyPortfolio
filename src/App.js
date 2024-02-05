import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Projects from './components/pages/Projects';
import Initiatives from './components/pages/Initiatives';
import Mentoring from './components/pages/Mentoring';
import ContactForm from './components/pages/ContactMe';
import UnderConstruction from './components/pages/UnderConstruction'

const App = () => {
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
            element={<UnderConstruction />} 
          />
          <Route path={pages.get('contactme').path} element={<ContactForm />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
