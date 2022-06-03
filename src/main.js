import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from './router';
import 'antd/dist/antd.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    renderRoutes(), document.getElementById('app-content')
)