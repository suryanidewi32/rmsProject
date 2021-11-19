import { Button, Form, Input } from 'antd';

const FormItem = (props) =>{

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
        label="Id"
        name="id"
      >
        <Input defaultValue={props.id} key={`${props.id}` }/>
      </Form.Item>

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

      <Form.Item
        label="Priority"
        name="priority"
      >
        <Input defaultValue={props.priority} key={`${props.priority}` } onChange={props.handlePriority}/>
      </Form.Item>

      <Form.Item
        label="Max"
        name="max"
      >
        <Input type="number" defaultValue={props.max} key={`${props.max}` } onChange={props.handleMax}/>
      </Form.Item>

      <Form.Item
        label="Min"
        name="min"
      >
        <Input type="number" defaultValue={props.min} key={`${props.min}` } onChange={props.handleMin}/>
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
      >
        <Input defaultValue={props.description} key={`${props.description}` } onChange={props.handleDescription}/>
      </Form.Item>

      <Form.Item
        label="Ui"
        name="ui"
      >
        <Input defaultValue={props.ui} key={`${props.ui}` } onChange={props.handleUi}/>
      </Form.Item>

      <Form.Item
        label="Persist"
        name="persist"
      >
        <Input defaultValue={props.persist} key={`${props.persist}` } onChange={props.handlePersist}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit" onClick={props.handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
)
}
export default FormItem;
