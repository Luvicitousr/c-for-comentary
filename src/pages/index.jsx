import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { NotFound } from './NotFound';
import { Cadastro } from './Cadastro';

export const Pages = () => (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
);