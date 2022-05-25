import { FC } from 'react';
import { Box, Skeleton, Toolbar, Grid, Typography, Backdrop, CircularProgress, useMediaQuery, useTheme } from '@mui/material';

const AppSkeletonLayout: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ display: 'flex' }}>
      {matches && (
        <Box
          sx={{
            width: {
              md: '15vw',
              lg: '10vw',
            },
            flexShrink: {
              md: 0
            }
          }}
        >
          <Skeleton
            animation="wave"
            height="100vh"
            width="100%"
            variant="rectangular"
            sx={(theme) => ({
              bgcolor: theme.palette.primary.main
            })}
          />
        </Box>
      )}
      <Box sx={{ width: '100%' }}>
        <Skeleton
          animation="wave"
          width="100%"
          variant="rectangular"
        >
          <Toolbar />
        </Skeleton>
        <Box
          sx={{
            px: 3,
            py: 1.5,
            flexGrow: 1,
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography component="div" variant="h4" sx={{ width: '100%', mr: 2, }}>
              <Skeleton
                animation="wave"
                width="100%"
                height="100%"
                sx={{ py: 2 }}
              />
            </Typography>
            <Typography component="div" variant="h4" sx={{ width: '100%', }}>
              <Skeleton
                animation="wave"
                width="100%"
                height="100%"
                sx={{ py: 2 }}
              />
            </Typography>
          </Box>
          <Box>
            <Typography component="div" variant="h3" sx={{ width: '100%', }}>
              <Skeleton
                animation="wave"
                width="100%"
                height="100%"
              />
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ height: '300px', mt: { md: '-60px' } }}>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
              <Skeleton
                animation="wave"
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
              <Skeleton
                animation="wave"
                width="100%"
                height="100%"

              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
              <Skeleton
                animation="wave"
                width="100%"
                height="100%"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Backdrop open>
        <CircularProgress color="primary" />
      </Backdrop>
    </Box>
  );
};

export default AppSkeletonLayout;