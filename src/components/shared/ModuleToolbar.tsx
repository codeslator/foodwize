import { FC, Fragment } from 'react'
import { Box, Typography } from '@mui/material';

interface ModuleToolbarProps {
  title: string;
  children?: JSX.Element | FC | Array<JSX.Element | FC>;
  actions?: JSX.Element | FC | Array<JSX.Element | FC>
}

const ModuleToolbar: FC<ModuleToolbarProps> = ({ title, actions, children }) => {
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
        {Boolean(actions) && (
          <>
            {(Array.isArray(actions)) ? (
              <Box>
                {actions?.map((action, index) => (
                  <Fragment key={index}>{action}</Fragment>
                ))}
              </Box>
            ) : (
              <>
                {actions}
              </>
            )}
          </>
        )}
      </Box>
      {children && <>{children}</>}
    </>
  );
};

export default ModuleToolbar;