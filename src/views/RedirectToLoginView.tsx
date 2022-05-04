import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import GoToLogin from '../assets/img/GoToLogin.svg';
import { URLS_TO } from '../config/router/navigation/index';

const RedirectToLoginView: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate(URLS_TO.ROOT), 3000)
  }, []);

  return (
    <>
      <Helmet>
        <title>Redirect | Foodwize</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Container maxWidth="md">
          <Typography align="center" color="primary" variant="h4">
            Redirecting to login...
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src={GoToLogin}
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RedirectToLoginView;