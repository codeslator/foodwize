import { FC } from 'react'
import { useParams } from 'react-router-dom';

const OrderDetailsView: FC = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>OrderDetailsView</div>
  );
};

export default OrderDetailsView;