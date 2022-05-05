import { FC } from 'react'
import { Helmet } from 'react-helmet';
import { ModuleToolbar } from '../components/shared';

const SuppliersView: FC = () => {
  return (
    <>
      <Helmet>
        <title>Suplliers | Foodwize</title>
      </Helmet>
      <ModuleToolbar title="Suppliers" action={() => console.log('Suppliers module here')} actionTitle="Add Supplier">
        <>Hello worls</>
      </ModuleToolbar>
    </>
  );
};

export default SuppliersView;