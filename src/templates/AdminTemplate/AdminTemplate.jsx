import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TOKEN, TOKEN_USER, USER_LOGIN } from '../../util/config'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import _ from 'lodash'
import { history } from '../../index'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AdminTemplate = (props) => {
    const { userLogin } = useSelector((state) => state.UserReducer)

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (collapsed) => {
        // console.log(collapsed);
        setCollapsed(collapsed)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Navigate to="/" />
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Navigate to="/" />
    }

    const operations = (
        <Fragment>
            {!_.isEmpty(userLogin) ? (
                <Fragment>
                    {' '}
                    <button
                        onClick={() => {
                            history.push('/profile')
                        }}
                    >
                        <div
                            style={{ width: 40, height: 40 }}
                            className="m-auto rounded-full flex justify-center items-center bg-red-200 text-2xl"
                        >
                            {userLogin.taiKhoan.substr(0, 1)}
                        </div>{' '}
                        Hello ! {userLogin.taiKhoan}{' '}
                    </button>{' '}
                    <button
                        className="text-blue-400"
                        onClick={() => {
                            localStorage.removeItem(USER_LOGIN)
                            localStorage.removeItem(TOKEN_USER)
                            history.push('/home')
                            window.location.reload()
                        }}
                    >
                        Đăng xuất
                    </button>{' '}
                </Fragment>
            ) : (
                ''
            )}
        </Fragment>
    )

    return (
        <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img
                            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                            alt="..."
                        />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to="/admin/users">Users</NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<FileOutlined />} title="Movies">
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to="/admin/movies">Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="11" icon={<FileOutlined />}>
                                <NavLink to="/admin/movies/addmovie">Add Movie</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3" icon={<DesktopOutlined />}>
                            <NavLink to="/admin/showtime">Showtime</NavLink>
                        </Menu.Item>
                        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item> */}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div className="text-right pr-10 pt-1">{operations}</div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: '85vh' }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    )
}

export default AdminTemplate
