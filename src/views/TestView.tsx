import useAxios from '../utils/hooks/useAxios';

interface VendorMetadata {
  Restaurant: string;
  Description: string;
}
interface Vendor {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  metadata: VendorMetadata;
}

interface VendorData {
  vendors: Vendor[];
  count: number;
}

const TestView = () => {
  const { data, response } = useAxios<VendorData>({ url: 'vendors?limit=10&offset=0' });
  console.log(data, response)


  return (
    <div>TestView</div>
  );
};

export default TestView;
