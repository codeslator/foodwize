import { FC, forwardRef } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Divider,
  Breakpoint,
  Button
} from '@mui/material';
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

interface ModuleConfirmProps {
  open: boolean;
  handleClose?: () => void;
  handleCancel: () => void;
  handleConfirm: () => void;
  title: string;
  children: JSX.Element | FC;
  size: Breakpoint;
}

const ModuleConfirm: FC<ModuleConfirmProps> = ({ open, handleClose, handleCancel, handleConfirm, title, children, size }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog
      open={open}
      onClose={Boolean(handleClose) ? handleClose : handleCancel}
      TransitionComponent={Transition}
      maxWidth={size}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          minWidth: {
            sx: '100%',
            sm: '50%',
            md: '30%',
          },
          borderRadius: {
            xs: 0,
            sm: '25px',
          },
        },
      }}
    >
      <DialogTitle
        sx={(theme) => ({
          backgroundColor: theme.palette.secondary.main,
          color: '#fff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        <Typography variant="h5" component="span">
          {title}
        </Typography>
        {Boolean(handleClose) && (
          <IconButton onClick={handleClose}>
            <Close sx={{ color: '#fff' }} />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ py: 3, px: 5 }}>
          {children}
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Button onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="secondary" autoFocus onClick={handleConfirm} sx={{ color: '#fff' }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModuleConfirm;