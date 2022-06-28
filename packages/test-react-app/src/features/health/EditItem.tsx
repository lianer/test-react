import { Button, Form, Input, Space, Toast } from 'antd-mobile';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectHealth, updateItem } from './healthSlice';
import Header from '../../components/header/Header';

const EditItem: React.FC = () => {
  const id = +useParams().id!;
  const healthList = useSelector(selectHealth);
  const dispatch = useDispatch();
  const target = healthList.find((item) => item.id === id)!;

  const [min, setMin] = useState(target.min);
  const [max, setMax] = useState(target.max);

  const onCancel = () => {
    window.history.back();
  };

  const onConfirm = () => {
    dispatch(updateItem({ ...target, min, max }));
    Toast.show({
      icon: 'success',
      content: '保存成功',
      duration: 2000,
      maskClickable: false,
      afterClose: onCancel,
    });
  };

  return (
    <>
      <Helmet>
        <title>{target.title}范围设置</title>
      </Helmet>

      <Header>{target.title}范围设置</Header>

      <Form layout="vertical" mode="card">
        <Form.Header>{target.title}范围设置</Form.Header>
        <Form.Item label="最小值">
          <Input defaultValue={String(min)} onChange={(s) => setMin(+s)} />
        </Form.Item>
        <Form.Item label="最大值">
          <Input defaultValue={String(max)} onChange={(s) => setMax(+s)} />
        </Form.Item>
      </Form>

      <Space direction="horizontal" block style={{ padding: 12, '--gap': '16px' }}>
        <Button color="default" fill="outline" onClick={onCancel}>
          取消
        </Button>
        <Button color="primary" fill="solid" onClick={onConfirm} style={{ width: '10ch' }}>
          保存
        </Button>
      </Space>
    </>
  );
};
export default EditItem;
