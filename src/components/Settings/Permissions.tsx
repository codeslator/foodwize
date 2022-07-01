/* eslint-disable react/no-unstable-nested-components */
import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { CheckList } from '../shared/CheckList';
import { useNavTabs } from '../shared/NavTabs';

interface CategoriesProps {
  categories: Array<string>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  indexCategorySelected: number;
}
const Categories: FC<CategoriesProps> = ({ categories, setCategory, indexCategorySelected }) => {
  return (
    <Box>
      {categories.map((category, i) => (
        <Box
          sx={{
            width: '12rem',
            backgroundColor: indexCategorySelected === i ? '#FFEED0' : '#FFFBF3',
            borderRadius: '8px',
            p: '8px',
            mt: '8px',
            cursor: 'pointer',
          }}
          onClick={() => setCategory(categories[i])}
        >
          {category}
        </Box>
      ))}
    </Box>
  );
};

const Permissions: FC = () => {
  const {
    tabs: categories,
    tabSelectedIndex,
    setTab,
  } = useNavTabs(['Users', 'Finances', 'Operations', 'Admin', 'Super Admin']);
  const checks = [
    {
      label: 'Read',
    },
    {
      label: 'Write',
    },
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
    },
  ];
  const checkLists = [checks, checks, checks, checks, checks, checks, checks, checks];
  const CheckLists = categories.map(
    (category, i) =>
      tabSelectedIndex === i && (
        <Grid item container sx={{ cursor: 'pointer' }}>
          {checkLists.map((checkList) => (
            <Box mr={2} mb={2}>
              <CheckList title={category} checks={checkList} />
            </Box>
          ))}
        </Grid>
      ),
  );

  return (
    <Grid container display="flex" flexWrap="nowrap">
      <Grid item>
        <Categories categories={categories} setCategory={setTab} indexCategorySelected={tabSelectedIndex} />
      </Grid>
      <Grid item m={2}>
        <Grid item container>
          {CheckLists}
        </Grid>
        <Grid item>
          <Box mt={2}>
            <LoadingButton type="submit" variant="contained" color="secondary" sx={{ color: '#ffffff' }}>
              Save
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Permissions;