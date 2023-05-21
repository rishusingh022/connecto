import "./style.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/Error";
import NotFoundPage from "./pages/NotFound";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, ERROR_ROUTE, NOT_FOUND_ROUTE } from "./constant/routes";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={LOGIN_ROUTE} />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
          <Route path={ERROR_ROUTE} element={<ErrorPage />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;