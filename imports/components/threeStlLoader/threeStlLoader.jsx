import React from 'react';
import {} from "antd";
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import OrbitControls from 'three-orbitcontrols';

export default class ThreeStlLoader extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount(){
        let N = 128;
        let analyser = null;
        var scene = new THREE.Scene();
        var stlLoader = new STLLoader();

        stlLoader.load('./stl/model1.stl',geometry => {
          var material = new THREE.MeshPhongMaterial({color:0xDDDADA});
          var mesh = new THREE.Mesh(geometry,material);
          scene.add(mesh);
        })
        var point = new THREE.PointLight(0xffffff);
        point.position.set(200,200,200);
        scene.add(point);
        var point2 = new THREE.PointLight(0xffffff);
        point2.position.set(200,200,-200);
        scene.add(point2);

        var width = window.innerWidth;
        var height = window.innerHeight;
        var k = width / height;
        var s = 200;
        var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, -2000, 2000);
        camera.position.set(100, 100, 120);
        camera.lookAt(scene.position);
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        document.body.appendChild(renderer.domElement);
     
        function render() {
          renderer.render(scene, camera);
          requestAnimationFrame(render);
        }
        
        var controls = new OrbitControls(camera, renderer.domElement);
        var axes = new THREE.AxesHelper(500);
        scene.add(axes);
        render();
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}