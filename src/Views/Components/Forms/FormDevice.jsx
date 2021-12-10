
import { Button, Form, Input } from 'antd';

const DeviceForm = (props) =>{

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
        rules={[
          {
            required: true,
            message: 'Please input Id!',
          },
        ]}
      >
        <Input value={props.id} onChange={props.handleId} />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[
          {
            required: true,
            message: 'Please input type!',
          },
        ]}
      >
        <Input  value={props.type} onChange={props.handleType} />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input name!',
          },
        ]}
      >
        <Input value={props.name} onChange={props.handleName}  />
      </Form.Item>

      <Form.Item
        label="Version"
        name="version"
        rules={[
          {
            required: true,
            message: 'Please input your versions!',
          },
        ]}
      >
        <Input onChange={props.handleVersion}/>
      </Form.Item>

      <Form.Item
        label="Modules"
        name="modules"
        rules={[
          {
            required: true,
            message: 'Please input your modules!',
          },
        ]}
      >
        <Input onChange={props.handleModule} />
      </Form.Item>

      <Form.List name="addModule">
        {(fields, { add }) => (
          <>
            {fields.map(field => (
                <Form.Item
                  {...field}
                  label="Add Module"
                  name={[field.name, 'Addmodule']}
                  fieldKey={[field.fieldKey, 'Addmodule=']}
                  rules={[{ required: true, message: 'Missing Module' }]}
                >
                  <Input onChange={props.handleaddModule} />
                </Form.Item>
            ))}

            <Form.Item
            wrapperCol={{
              offset: 6,
              span: 12,
            }}
            >
              <Button type="dashed" onClick={() => add()} block >
                Add Module
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item
        label="Config Type"
        name="config type"
      >
         <Input onChange={props.handleConfigType}/>
      </Form.Item>

      <Form.Item
        label="Config Name"
        name="configname"
      >
         <Input onChange={props.handleConfigName}/>
      </Form.Item>

      <Form.Item
        label="Protocol Type"
        name="protocoltypeconfig"
      >
         <Input onChange={props.handleProtocolType}/>
      </Form.Item>

      <Form.Item
        label="Protocol Name"
        name="protocolnameconfig"
      >
         <Input onChange={props.handleProtocolName}/>
      </Form.Item>

      <Form.Item
        label="Items Type"
        name="itemstypeconfig"
      >
         <Input onChange={props.handleItemsTypeconfig}/>
      </Form.Item>

      <Form.Item
        label="Items Name"
        name="itemsnameconfig"
      >
         <Input onChange={props.handleItemsNameconfig}/>
      </Form.Item>

      <Form.Item
        label="Priority"
        name="Priorityconfig"
      >
         <Input onChange={props.handlePriorityconfig}/>
      </Form.Item>

      <Form.Item
        label="Max"
        name="Maxconfig"
      >
         <Input onChange={props.handleMaxconfig}/>
      </Form.Item>
      
      <Form.Item
        label="Min"
        name="Minconfig"
      >
         <Input onChange={props.handleMinconfig}/>
      </Form.Item>

      <Form.Item
        label="Description"
        name="Descconfig"
      >
         <Input onChange={props.handleDescconfig}/>
      </Form.Item>

      <Form.Item
        label="Ui"
        name="Uiconfig"
      >
         <Input onChange={props.handleUiconfig}/>
      </Form.Item>

      <Form.Item
        label="Presist"
        name="Presistconfig"
      >
         <Input onChange={props.handlePresistconfig}/>
      </Form.Item>

      
      <Form.Item
        label="Status Type"
        name="statustype"
      >
        <Input onChange={props.handleStatustype}/>
      </Form.Item>

      <Form.Item
        label="Status Name"
        name="statusname"
      >
         <Input onChange={props.handleStatusName}/>
      </Form.Item>

      <Form.Item
        label="Protocol Type"
        name="protocoltype"
      >
         <Input onChange={props.handleProtocolTypestatus}/>
      </Form.Item>

      <Form.Item
        label="Protocol Name"
        name="protocolnamestatus"
      >
         <Input onChange={props.handleProtocolNamestatus}/>
      </Form.Item>

      <Form.Item
        label="Items Type"
        name="itemstypestatus"
      >
         <Input onChange={props.handleItemsTypestatus}/>
      </Form.Item>

      <Form.Item
        label="Items Name"
        name="itemsnamestatus"
      >
         <Input onChange={props.handleItemsNamestatus}/>
      </Form.Item>

      <Form.Item
        label="Priority"
        name="Prioritystatus"
      >
         <Input onChange={props.handlePrioritystatus}/>
      </Form.Item>

      <Form.Item
        label="Max"
        name="Maxstatus"
      >
         <Input onChange={props.handleMaxstatus}/>
      </Form.Item>
      
      <Form.Item
        label="Min"
        name="Minstatus"
      >
         <Input onChange={props.handleMinstatus}/>
      </Form.Item>

      <Form.Item
        label="Description"
        name="Descstatus"
      >
         <Input onChange={props.handleDescstatus}/>
      </Form.Item>

      <Form.Item
        label="Ui"
        name="Uistatus"
      >
         <Input onChange={props.handleUistatus}/>
      </Form.Item>

      <Form.Item
        label="Presist"
        name="Presiststatus"
      >
         <Input onChange={props.handlePresiststatus}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit" onClick={props.handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
)
}
export default DeviceForm;