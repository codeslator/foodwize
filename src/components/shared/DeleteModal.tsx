/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useSnackbar } from 'notistack';

// Redux
import store from '../../store/store';
import { getCurrentUser } from '../../store/actions/userActions';
import { Box, Grid, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 700,
  boxShadow: 24,
  px: 4,
  py: 2,
};

const DeleteInventoryModal = ({ item = {}, open, handleClose, handleRefresh }) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [alertMessage, setAlertMessage] = useState('error');
  // eslint-disable-next-line no-unused-vars
  const [alertType, setAlertType] = useState('success');
  const { enqueueSnackbar } = useSnackbar();
  // eslint-disable-next-line no-unused-vars
  store.dispatch(getCurrentUser());
  const { user } = store.getState();

  const deleteItem = async () => {
    try {
      const res = await axios({
        url: `inventories/${item.id}`,
        baseURL: process.env.REACT_APP_URL,
        method: 'delete',
        headers: {
          Authorization: user.token,
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_APIKEY,
        },
      });
      handleRefresh();
    } catch (errorM) {
      setLoading(false);
      if (errorM.response.data.errorMessage.slice(23, -2)?.length > 0) {
        enqueueSnackbar(errorM.response.data.errorMessage.slice(23, -2), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          TransitionComponent: Collapse,
        });
      }
    }
  };

  const handleDelete = () => {
    deleteItem();
    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} p={2} component={Box} key={item.id}>
        <Box component={Paper} sx={style}>
          <Grid container>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Typography gutterBottom variant="subtitle1" component="div">
                Delete this item?
              </Typography>
            </Grid>
            <Grid item xs={6} container direction="row" justifyContent="space-around" alignItems="center">
              <LoadingButton color="primary" type="submit" variant="contained" onClick={handleDelete}>
                Accept
              </LoadingButton>
            </Grid>
            <Grid item xs={6} container direction="row" justifyContent="space-around" alignItems="center">
              <LoadingButton color="secondary" type="submit" variant="contained" onClick={handleCancel}>
                Cancel
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteInventoryModal;
