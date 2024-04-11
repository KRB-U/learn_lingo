import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { theme } from "./constants/theme";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { selectTheme } from "./redux/auth/selectors";
const colorTheme = theme.colors;
const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={{ theme, colorTheme: colorTheme[currentTheme] }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/teachers" element={<Teachers />}></Route>
            <Route
              path="/favorites"
              element={
                <RestrictedRoute component={Favorite} redirectTo="/teachers" />
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
