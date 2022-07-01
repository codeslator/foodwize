import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';
import { ModuleTabs, ModuleToolbar } from '../components/shared';

const SettingsView: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(pathname === '/app/users') {
      navigate('/app/users/all')
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Settings | Foodwize</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleToolbar title="Settings" />
        </Grid>
        <Grid item xs={12}>
          <ModuleTabs
            hasRouter
            tabNames={[
              'Notifications',
              'Security',
              'Permissions',
            ]}
            tabs={[
              <Outlet />,
              <Outlet />,
              <Outlet />,
            ]}
            links={[
              'notifications',
              'security',
              'permissions',
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsView;
