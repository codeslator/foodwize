import { ChevronLeft } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { FC, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

interface ModuleDetailsToolbarProps {
  title: string;
  children?: JSX.Element | FC | Array<JSX.Element | FC>;
  actions?: JSX.Element | FC | Array<JSX.Element | FC>;
}

const ModuleDetailsToolbar: FC<ModuleDetailsToolbarProps> = ({ title, children, actions }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <IconButton aria-label="back" sx={{ mr: 1 }} onClick={() => navigate(-1)}>
            <ChevronLeft fontSize="large" />
          </IconButton>
          <Typography variant="h5" color="#5E565A">
            {title}
          </Typography>
        </Box>
        {Boolean(actions) && (
          <>
            {Array.isArray(actions) ? (
              <Box>
                {actions?.map((action, index) => (
                  <Fragment key={index}>{action}</Fragment>
                ))}
              </Box>
            ) : (
              <>{actions}</>
            )}
          </>
        )}
      </Box>
      {Boolean(children) && <>{children}</>}
    </>
  );
};

export default ModuleDetailsToolbar;