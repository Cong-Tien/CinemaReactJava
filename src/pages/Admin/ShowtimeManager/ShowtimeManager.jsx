import { AudioOutlined, CalendarOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Space, Table } from 'antd'
import moment from 'moment'
import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../..'
import { getMovieApi, xoaPhimApi } from '../../../redux/reducers/MovieReducer'
import { getShowtimeApi } from '../../../redux/reducers/ShowtimeReducer'
import { HOST_BE } from '../../../util/config'


const { Search } = Input
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
)

export default function ShowtimeManager() {
    // const onChange = (e) => {
    //     if(searchRef.current){
    //         clearTimeout(searchRef.current);
    //     }
    //     searchRef.current = setTimeout(() => {
    //         dispatch(getMovieApi(e.target.value))
    //     },300)  
    // }

    const searchRef = useRef(null);
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Mã lịch chiếu',
            dataIndex: 'idShowtime',
            value: (text,object) => {return <span>{text}</span>},
            sorter: (a, b) => a.idShowtime - b.idShowtime,
            sortDirections: ['descend', 'ascend'],
            sortOrder:'descend',
            width: '10%',
            className:"text-center"
        },
        {
            title: 'Ngày chiếu',
            dataIndex: 'showtime',
            render: (text,showtime) => {
                return <Fragment>
                    <p>{moment(showtime.shotime).format('DD/MM/YYYY')}</p>
                </Fragment>
            },
            width: '15%'
        },
        {
            title: 'Giờ chiếu',
            dataIndex: 'showtime',
            render: (text,showtime) => {
                return <Fragment>
                    <p>{moment(showtime.shotime).format('HH:MM A')}</p>
                </Fragment>
            },
            width: '15%'
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            render: (text,shotime) => {
                return <Fragment>
                    <p>{shotime.price}</p>
                </Fragment>
            },
            width: '15%',
        },
        {
            title: 'Phòng',
            dataIndex: 'idRoom',
            render: (text,showtime) => {
                return <Fragment>
                    <p>{showtime.idRoom}</p>
                </Fragment>
            },
            width: '15%',
        },
        {
            title: 'Cụm rạp',
            dataIndex: 'idCinema',
            render: (text,showtime) => {
                return <Fragment>
                    <p>{showtime.idCinema}</p>
                </Fragment>
            },
            width: '15%',
        },
        {
            title: 'Phim',
            dataIndex: 'maPhim',
            render: (text,showtime) => {
                return <Fragment>
                    <p>{showtime.maPhim}</p>
                </Fragment>
            },
            width: '15%',
        }
    ]
    useEffect(() => {
        dispatch(getShowtimeApi())
    }, [])
    const { arrShowtime } = useSelector((state) => state.ShowtimeReducer)
    console.log('arrShowtime', arrShowtime)
    const data = arrShowtime;

    return (
        <div>
            <h3 className="text-4xl">Quản lý Lịch chiếu</h3>
            <Button className="mb-5 block" onClick={() => {
                history.push('/admin/movies/addmovie')
            }}>Thêm lịch chiếu</Button>
            <Search
                className="mb-5"
                placeholder="input search text"
                //enterButton=<SearchOutlined />
                size="large"
                suffix={suffix}
            />
            <Table columns={columns} dataSource={data} rowKey="idShowtime"/>
        </div>
    )
}
