import React from 'react';

import { Form, Input } from 'antd';

const SearchBar = (child) =>{

  const [form] = Form.useForm();
  const submitForm = () => {
     form.resetFields();
   };


  return(
    <Form
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      onFinish={submitForm}
    >
      
    <Form.Item
      label="Id"
      name="id"
      rules={[
        {
          required: true,
          message: 'Please input your id!',
        },
      ]}
    >
      <Input onChange={child.handleInput}/>
    </Form.Item>
    </Form>
    )}
    

export default SearchBar;
