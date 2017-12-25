import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from '../components/app.jsx';
import store from './store';
import '../../styles/app.scss';

render(<Provider store = {store}>
    <App/>
</Provider>,
document.getElementById('app'));