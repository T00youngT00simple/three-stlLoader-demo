import React from 'react';
import {} from "antd";
import STLViewer from 'stl-viewer'


export default class StlLoader extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                STL display by stl-viewer
                <STLViewer
                    url='./stl/model1.stl'
                    width={400}
                    height={400}
                    modelColor='#B92C2C'
                    backgroundColor='#EAEAEA'
                    rotate={true}
                    orbitControls={true}
                />
            </div>
        );
    }

}