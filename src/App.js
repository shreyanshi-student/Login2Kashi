import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/laout';
import Home from './components/home/home';
import PrivacyPolicy from './components/privacyPolicy/privacypolicy';
import TermsConditions from './components/termsandCondition/termsandcondition';
import PageNotFound from './components/layout/pagenotfound';
// import CookieConsent from "react-cookie-consent";
import Offerlist from './components/offerlist/offerlist';
import Faq from './components/Faq/faq';
import Blog from './components/blog/blogs';
import About from './components/about/about';
// import GalleryPage from './components/gallery/gallery';
import ContactUsPage from './components/contact/contact';
import Singleblog from './components/blog/singleBlog.jsx'

function App() {

  return (
    <>
      
      <HashRouter >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />

            <Route path='/about' element={<About />} />
            
            {/* <Route path='/gallery' element={<GalleryPage />} /> */}
            <Route path='/offerlist' element={<Offerlist />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/faq' element={<Faq />} />
             <Route path='/singleblog' element={<Singleblog />} />
            <Route path='/contact' element={<ContactUsPage />} />
       {/* <Route path='/offer' element={<OfferList />} /> */}

          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
