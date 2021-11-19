import { Button, Form, Input } from 'antd';

const Group1 = (props) =>{

  const prot=props.protocols
  const protocols = () => {
    for (var i = 0; i < prot.length; i++) {
    let array = prot[i]
    return array.map((protocol) => protocol.name);
  }
  };

  const [form] = Form.useForm();
  const submitForm = () => {
     form.resetFields();
   };

  return (
    <Form
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      onFinish={submitForm}
    >

      <Form.Item
        label="Type"
        name="type"
      >
        <Input defaultValue={props.type} key={`${props.type}` } onChange={props.handleType} />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
      >
        <Input defaultValue={props.name} key={`${props.name}` } onChange={props.handleName}  />
      </Form.Item>

      {protocols().map(protocols=>  <Form.Item
        label="Protocols"
        name="protocols"
      >
        <Input defaultValue={protocols} key={`${protocols}` } />
      </Form.Item>)}

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
      <Button type="primary" htmlType="submit"  onClick={props.handleSubmit}>
      Submit
      </Button>
      </Form.Item>
    </Form> 

)
}

export default Group1;
