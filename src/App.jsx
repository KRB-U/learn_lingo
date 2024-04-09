import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useToggleTheme } from "./hooks/useToggleTheme";
import { theme } from "./constants/theme";
import { RestrictedRoute } from "./components/RestrictedRoute";
const colorTheme = theme.colors;
const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();

  const { palette } = useToggleTheme();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, palette]);

  return (
    <>
      <ThemeProvider theme={{ theme, colorTheme: colorTheme[palette] }}>
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
