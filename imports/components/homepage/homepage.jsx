import React from 'react';
import {} from "antd";
import StlLoader from '../stlLoader/stlLoader';
import STLViewer from 'stl-viewer'
import ThreeStlLoader from '../threeStlLoader/threeStlLoader';

export default class HomePage extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                {/* <StlLoader/> */}
                <ThreeStlLoader/>
            </div>
        );
    }
}