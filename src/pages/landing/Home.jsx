import Button from '../../components/ui/button/Button';
import './Home.css';

const Home = () => {
    return (
        <>
            <main className="home-page">
                <section className="hero-wrapper">
                    <div className="hero-content">
                        <span className="hero-label">Stop bleeding cash on $7 lattes.</span>
                        <h1 className="hero-headline">
                            Put your wallet <br />
                            <span className="hero-gradient">under managament.</span>
                        </h1>
                        <p className="hero-subtext">
                            Define your goal. Track every cent. Reach it faster.
                        </p>
                        <div className="hero-actions">
                            <Button variant='primary' animation='animation'>Create account</Button>
                        </div>
                    </div>  
                </section>                
                

            </main>
                    
                    
        </>
    );
};

export default Home;