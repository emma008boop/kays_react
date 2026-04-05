import Button from '../../../ui/button/Button';
import './Nav.css';


const Nav = () => {
    return (
        <>
            <header className="site-header">
                <nav className="nav-container">
                    <div className="brand-identity">
                        <span className="brand-logo">KAYS</span>
                    </div>
                    
                    <div className="auth-controls">
                        <Button variant='secondary'>
                            Log in
                        </Button>
                        {/* size defined in nav.css */}
                        <Button variant='primary' animation='animation'>
                            Create account
                        </Button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Nav;
