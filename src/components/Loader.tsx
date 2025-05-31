import {  Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {

  return (
    <div className="country-card loading">
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  );
};

export default Loader;
