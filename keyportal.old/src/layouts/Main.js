import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Title from './components/Title';
import Menu from './components/Menu';


const MainLayout = ({ ...props }) => {
    return (
        <div>
            <Header />
            <Title title={props.title} />
            <Menu />
            <Outlet />
        </div>
    );
}

export default MainLayout;