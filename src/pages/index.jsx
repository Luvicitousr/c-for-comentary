import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { NotFound } from './NotFound';

export const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
);