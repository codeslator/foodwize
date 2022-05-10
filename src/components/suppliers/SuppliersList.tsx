
import { FC } from 'react';
import EmptyView from '../shared/EmptyView';

const SuppliersList: FC = () => {
  

  return (
    <>
      <p>Hola mundo</p>
      <EmptyView title="You don't have any Supplier" link="Click here to add your supplier" />
    </>
  );
};

export default SuppliersList;