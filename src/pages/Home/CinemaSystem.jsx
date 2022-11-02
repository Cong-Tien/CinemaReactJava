import { Radio, Space, Tabs } from 'antd'
import moment from 'moment'
import React, { useEffect, useState, memo, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function CinemaSystem(props) {
    const [tabPosition, setTabPosition] = useState('left')
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value)
    }

    useEffect(() => {}, [])

    const renderCinemaSystem = () => {
        return props.arrCinema?.map((cinema, index) => {
            return (
                <Tabs.TabPane
                    tab={<img className="rounded-full" width="70" src={cinema.logo} />}
                    key={index}
                >
                    <Tabs tabPosition={tabPosition} defaultActiveKey="1">
                        {cinema.lstCumRap?.map((cumRap, index) => {
                            return (
                                <Tabs.TabPane
                                    tab={
                                        <div className="flex" style={{ width: '350px' }}>
                                            <img
                                                className="rounded-full"
                                                width="20%"
                                                height="20%"
                                                src="https://movie-booking-project.vercel.app/img/cumRap/cinestar-hai-ba-trung-15383833704033.jpg"
                                            />
                                            <br />
                                            <div>
                                                <p className="text-left mx-5">{cumRap.tenCumRap}</p>
                                                <p className="text-left px-5">
                                                    {cumRap.diaChi.length > 15 ? (
                                                        <p>{cumRap.diaChi.slice(0, 40)} ...</p>
                                                    ) : (
                                                        <p>{cumRap.diaChi}</p>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    key={index}
                                >
                                    {/* load Phim */}
                                    {cumRap.danhSachPhim.slice(0,5).map((phim, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className="flex my-5">
                                                    <div className="flex">
                                                        <img
                                                            style={{ width: 100, height: 100 }}
                                                            src={phim.hinhAnh}
                                                            alt={phim.tenPhim}
                                                            onError={({ currentTarget }) => {
                                                                currentTarget.onerror = null // prevents looping
                                                                currentTarget.src ='https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/302033044_1534548460375461_2462156735916943716_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LL2dMoYmeKMAX9PXgzl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDkFXMnRwQmTbzvqcCkP6yd6YCZGZUTkk-raJxc9Ed_Sg&oe=6365D938'
                                                            }}
                                                        />
                                                        <div className="ml-2">
                                                            <h1 className="text-2xl text-green-700">
                                                                {phim.tenPhim}
                                                            </h1>
                                                            <p>{cumRap.diaChi}</p>
                                                            <div className="grid grid-cols-6 gap-6">
                                                                {phim.lstLichChieuTheoPhim
                                                                    ?.slice(0, 12)
                                                                    .map((lichChieu, index) => {
                                                                        return (
                                                                            <NavLink
                                                                                to="/"
                                                                                key={index}
                                                                                className="text-xl text-green-400"
                                                                            >
                                                                                {moment(
                                                                                    lichChieu.ngayChieuGioChieu
                                                                                ).format('hh:mm A')}
                                                                            </NavLink>
                                                                        )
                                                                    })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </Fragment>
                                        )
                                    })}
                                </Tabs.TabPane>
                            )
                        })}
                    </Tabs>
                </Tabs.TabPane>
            )
        })
    }
    console.log(props.arrCinema)
    return (
        <div className="container">
            <Space
                style={{
                    marginBottom: 24,
                }}
            >
                Tab position:
                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                    <Radio.Button value="top">top</Radio.Button>
                    <Radio.Button value="bottom">bottom</Radio.Button>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space>
            <Tabs tabPosition={tabPosition} defaultActiveKey="1">
                {renderCinemaSystem()}
            </Tabs>
        </div>
    )
}

export default CinemaSystem
