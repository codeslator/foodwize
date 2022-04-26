import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { routes } from './navigation/routes';

export const Router: FC = () => (
  <Suspense fallback={(
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  )}>
    <BrowserRouter>
      <Routes>
        {routes.map(({ Layout, path: root, children }) => (
          <Route  element={<Layout />} path={root} key={root} >
            {children.map(({ Component, path }, index) => (
              <Route path={path} element={<Component />} key={index} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </Suspense>
);