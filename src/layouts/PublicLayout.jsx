import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/footer/Footer';
import Nav from '../components/layout/nav/Nav';

const PublicLayout = () => {
    return (
        <>
            <div className="wallpaper-canvas"></div>

            <Nav />

            <Outlet />

            <Footer />
        </>
    )
}

export default PublicLayout;