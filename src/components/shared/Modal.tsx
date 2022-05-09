import React from 'react';
import { Card, Grid, IconButton, Modal, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { defaultPalette } from '../../assets/themes/defaultPalette';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 15,
    maxWidth: 600,
  },
});

const BasicModal = (props) => {
  const { children, open, onClose } = props;
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose} className={classes.modal} sx={{ borderRadius: '30px' }}>
      <Card sx={{ maxWidth: '35%', borderRadius: '30px' }}>
        <Grid
          sx={{
            backgroundColor: defaultPalette.primary.main,
            padding: '35px 50px',
            color: '#FFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Add User
          </Typography>
          <IconButton onClick={() => onClose(false)}>
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </Grid>
        {children}
      </Card>
    </Modal>
  );
};

export default BasicModal;
