import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Title from './components/Title';


const WizardLayout = ({ ...props }) => {
    return (
        <div>
            <Header />
            <Title title={props.title} />
            <Outlet />
        </div>
    );
}

export default WizardLayout;