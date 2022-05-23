import { FC, forwardRef } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, Slide, Typography, useMediaQuery, useTheme, IconButton, Divider, Breakpoint } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Close } from '@mui/icons-material';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ModuleDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: JSX.Element | FC;
  size: Breakpoint;
}

const ModuleDialog: FC<ModuleDialogProps> = ({ open, handleClose, title, children, size }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth={size}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          minWidth: '30%',
          borderRadius: '25px'
        }
      }}
    >
      <DialogTitle
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          display:'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        <Typography variant="h5" component="span">
          {title}
        </Typography>
        <IconButton onClick={handleClose}>
          <Close sx={{ color: '#fff' }} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ paddingX: 10 }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModuleDialog;