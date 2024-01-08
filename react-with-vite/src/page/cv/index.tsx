import { useState } from 'react';
import CvPreview from './cvPreview';
import './index.less'
import { Input } from 'antd';

export default function CV() {
    const [name, setName] = useState('容志和')
    const handleSetName = (event) => {
        setName(event.target.value)
    }

    // const infoList
    return (
        <div className="cv">
            <div className="cv-editor">
                <div>姓名：<Input placeholder="Basic usage" value={name} onChange={handleSetName}/></div>
            </div>
            <div className="cv-preview">
                <CvPreview name={name}></CvPreview>
            </div>
        </div>
    )
}