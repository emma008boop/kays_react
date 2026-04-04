import Button from '../../components/ui/button/Button';
import './Home.css';

const Home = () => {
    return (
        <>
            <main className="home-page">
                {/* SECTION: HERO */}
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

                <section className="bento-layout">
                    
                    {/* CARD 1: Precision Tracking */}
                    <article className="bento-card bento-main-display">
                        <div className="video-background">
                            <video autoPlay muted loop playsInline poster="../../assets/img/ui/image_error_savings.png">
                            <source src="../../assets/video/count_savings.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                            <div className="video-overlay"></div>
                        </div>
                        <div className="card-content">
                            <header className="card-header">
                            <span className="card-tag">Precision Tracking</span>
                            <h2 className="card-title">Stop guessing, <br />start knowing.</h2>
                            </header>
                            <footer className="card-footer">
                                <p className="card-text">
                                    Manage your finances with surgical precision, because clearly your current intuition isn't working.
                                </p>
                            </footer>
                        </div>
                    </article>

                    <article className="bento-card bento-goal-preview">
                        <div className="video-background">
                            <video autoPlay muted loop playsInline>
                            <source src="/assets/video/team_vision.mp4" type="video/mp4" />
                            </video>
                            <div className="video-overlay" style={{ background: 'rgba(0, 0, 0, 0.6)' }}></div>
                        </div>
                        <div className="card-inner about-kays-trigger">
                            <div className="trigger-content">
                                <span className="card-tag">Our Identity</span>
                                <h3 className="feature-title">Who is KAYS?</h3>
                                <p className="card-text card-text-position">
                                    Explore our mission, vision, and the surgical precision driving our financial philosophy.
                                </p>
                            </div>
                            <div className="trigger-action">
                                {/* <Link to="/about" className="btn-explore">
                                    <span>View Manifesto</span>
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link> */}
                            </div>
                        </div>
                    </article>
                    </section>
                </main>
                    
                    
        </>
    );
};

export default Home;