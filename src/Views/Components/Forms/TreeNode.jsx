import { Tree } from 'antd';

  const TreeNode = (props) => {

    const name       = props.name
    const version    = props.version
    const type       = props.type
    const modules    = props.module

    const config           = 'type: ' + props.config
    const protocolconfig   =  props.protocol
    const itemconfig       =  props.item
    const typeitemsconfig  = 'type: ' + props.typeitems

    const status           = 'type: ' + props.status
    const protocolstatus   =  props.protocolstatus
    const itemstatus       =  props.itemstatus
    const typeitemsstatus  = 'type: ' + props.typeitemsstatus

    const treeData = [
      {
        title: name,
        key: '0-0',
       
        children: [
          {
            title: version,
            key: '0-0-0',
          },
          {
            title: type,
            key: '0-0-1',
          },
          {
            title: modules,
            key: '0-0-2',
          },
          {
            title: 'config',
            key: '0-0-3',
            children: [
              { title: config , key: '0-0-0-0' },
              { title: 'protocols', key: '0-0-0-1',
                children: [
                  { title: protocolconfig, key: '0-0-0-0-0' },
                  { title: 'items', key: '0-0-0-0-1',
                  children: [
                    { title: itemconfig, key: '0-0-0-0-0-0' },
                    { title: typeitemsconfig, key: '0-0-0-0-0-1' },
                  ],
                },
                ],
            },
            ],
          },
          {
            title: 'status',
            key: '0-0-4',
            children: [
              { title: status , key: '0-0-1-0' },
              { title: 'protocols', key: '0-0-0-2',
                children: [
                  { title: protocolstatus, key: '0-0-0-1-0' },
                  { title: 'items', key: '0-0-0-0-2',
                  children: [
                    { title: itemstatus, key: '0-0-0-0-1-0' },
                    { title: typeitemsstatus, key: '0-0-0-0-0-2' },
                  ],
                },
                ],
            },
            ],
          },
        ],
      },
    ];

    return (
      <div>
        <Tree
          treeData={treeData}
        />
      </div>
    );
  }


  export default TreeNode;