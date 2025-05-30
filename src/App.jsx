import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from '@/pages/NotFound';
import Layout from '@/components/Layout';
import Home from '@/pages/home/Home';
import Initiatives from '@/pages/initiatives/Initiatives';
import FundedGrants from '@/pages/fundedGrants/FundedGrants';
import GrantPage from '@/pages/fundedGrants/GrantPage';
import ProgramExpenses from '@/pages/programExpenses/ProgramExpenses';
import Blog from '@/pages/blog/Blog';
import BlogPage from '@/pages/blog/BlogPage';
import FaqPage from '@/pages/faq/Faq';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/grants" element={<FundedGrants />} />
          <Route path="/grants/:id" element={<GrantPage />} />
          <Route path="/expenses" element={<ProgramExpenses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
