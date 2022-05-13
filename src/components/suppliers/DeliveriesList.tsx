import { FC } from 'react'
import EmptyView from '../shared/EmptyView';

const DeliveriesList: FC = () => {
  return (
    <>
      <EmptyView title="You don't have any Supplier" link="Click here to add your supplier" />
    </>
  );
};

export default DeliveriesList;