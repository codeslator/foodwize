import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { routes } from './navigation/routes';
import { useAuth } from "../../utils/hooks";
import { URLS_TO } from './navigation/index';

export const Router: FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Suspense fallback={(
      <Backdrop open>
        <CircularProgress color="primary" />
      </Backdrop>
    )}>
      <BrowserRouter>
        <Routes>
          <Route path={URLS_TO.ROOT} element={<Navigate to={isAuthenticated ? URLS_TO.HOME : URLS_TO.LOGIN} replace />} />
          {routes.map(({ Layout, path: root, children }) => (
            <Route element={<Layout />} path={root} key={root} >
              {children.map(({ Component, path, children: grandChildren }, index) => {
                if(Boolean(grandChildren)) {
                  return (
                    <Route path={path} element={<Component />} key={index}>
                      {grandChildren?.map(({ Component, path }, i) => (
                        <Route path={path} element={<Component />} key={i} />
                      ))}
                    </Route>
                  )
                }
                return (<Route path={path} element={<Component />} key={index} />)
              })}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
};