import VideoBackground from "../video/VideoBackground";

const Card = ({ videoBackground = 'none', }) => {
    return (
        <>
            {/* CARD 1: Precision Tracking */}
            <article className="bento-card bento-main-display">
                <VideoBackground videoUrl={videoBackground}></VideoBackground>
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
        </>
    );
}

export default Card;