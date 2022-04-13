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
        {routes.map(({ Layout, path, children }) => (
          <Route element={<Layout />} key={path}>
            {children.map(({ Component, path, to }) => (
              <Route path={path} element={<Component />} key={to} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </Suspense>
);