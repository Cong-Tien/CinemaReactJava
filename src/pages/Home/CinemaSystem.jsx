import { Radio, Space, Tabs } from 'antd'
import React, { useState } from 'react'

export default function CinemaSystem() {
    const [tabPosition, setTabPosition] = useState('left')
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value)
    }
    return (
        <div className='container'>
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
                <Tabs.TabPane tab={<img className='rounded-full' width='70' src='https://picsum.photos/200'/>} key="1">
                    Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab={<img className='rounded-full' width='70' src='https://picsum.photos/201'/>} key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab={<img className='rounded-full' width='70' src='https://picsum.photos/210'/>} key="3">
                    Content of Tab Pane 3
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}
