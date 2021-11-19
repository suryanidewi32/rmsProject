import { HomeOutlined, MobileOutlined, SolutionOutlined, ScheduleOutlined, SettingOutlined, SafetyOutlined} from '@ant-design/icons';
import { Layout,Menu} from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Side = () =>{
    const location = useLocation();
    return(
        <Sider >
        <div className="logo" />
                <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                className="menu"
                >
                <Menu.Item key="/" icon={<HomeOutlined />}>Home <Link to="/" /> </Menu.Item>
                <Menu.Item key="/item" icon={<SolutionOutlined />}>Item <Link to="/item" /> </Menu.Item>
                <Menu.Item key="/protocol" icon={<ScheduleOutlined />}>Protocol <Link to="/protocol" /> </Menu.Item>
                <Menu.Item key="/config" icon={<SettingOutlined />}>Config <Link to="/config" /> </Menu.Item>
                <Menu.Item key="/status" icon={<SafetyOutlined />}>Status <Link to="/status" /> </Menu.Item>
                <Menu.Item key="/device" icon={<MobileOutlined />}>Device <Link to="/device" /> </Menu.Item>
                </Menu>
                </Sider>
        )
                }
export default Side;