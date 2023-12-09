import PropTypes from "prop-types";
import './App.css'
export const App = ({children}) => <>{children}</>;

App.propTypes = {
  children: PropTypes.node,
};
