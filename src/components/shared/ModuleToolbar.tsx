import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material';

interface ModuleToolbarProps {
  title: string;
  action?: () => void;
  actionTitle?: string;
  children?: JSX.Element | FC;
}

const ModuleToolbar: FC<ModuleToolbarProps> = ({ title, action, actionTitle, children }) => {
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
        <Typography variant="h4" color="#5E565A">{title}</Typography>
        {Boolean(action) && (
          <Button
            variant="contained"
            color="secondary"
            onClick={action}
            sx={{
              color: '#fff'
            }}
          >
            {actionTitle}
          </Button>
        )}
      </Box>
      {children && <>{children}</>}
    </>
  );
};

export default ModuleToolbar;