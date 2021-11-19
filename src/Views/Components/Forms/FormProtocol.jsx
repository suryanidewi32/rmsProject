import { Button, Form, Input } from 'antd';

const Group = (props) =>{

  const itemap=props.item
  const items = () => {
    for (var i = 0; i < itemap.length; i++) {
    let array = itemap[i]
    return array.map((item) => item.name);
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

      {items().map(item=>  <Form.Item
        label="Items"
        name="items"
      >
        <Input defaultValue={item} key={`${item}` } />
      </Form.Item>)}

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
      <Button type="primary" htmlType="submit"  onClick={props.handleSubmit}>
      Submit
      </Button>
      </Form.Item>
    </Form> 

)
}
export default Group;
