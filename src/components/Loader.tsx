import {  Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
  max-width: 320px;
  width: 100%;
  min-height: 200px;
  height: 224px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {

  return (
    <LoaderWrapper>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </LoaderWrapper>
  );
};

export default Loader;
