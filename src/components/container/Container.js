import React, {Component} from 'react';
import {Breadcrumb, Layout, Menu} from "antd";
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Layout, Menu, Breadcrumb, Table} from 'antd';
import {Link} from "react-router-dom";
import Blotter from '../Blotter'

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


class Container extends Component {


    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <Menu.Item key="2">Accueil</Menu.Item>
                                <Menu.Item key="1"><Link to="/upload">Upload</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{padding: '0 50px'}}>


                                <Blotter/>


                            </Content>
                        </Layout>
                    </Layout>
                </Layout>,
            </div>
        )
    }

}

export default Container;