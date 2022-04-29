import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@mui/material';
import NotFound from '../assets/img/NotFound.svg';

const NotFoundView: FC = () => {
  return (
    <>
      <Helmet>
        <title>404 | Foodwize</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container>
          <Typography align="center" color="secondary" variant="h3">
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation we are redirecting you to
            the principal page
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src={NotFound}
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
  )
}

export default NotFoundView;