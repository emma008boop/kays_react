import Button from '../../../ui/button/Button';
import './Hero.css';

const Hero = ({ label, tittle, gradientText, subtext, buttonText }) =>  {
    return (
        <section className="hero-wrapper">
            <div className="hero-content">
                <span className="hero-label">{label}</span>
                <h1 className="hero-headline">
                    {tittle}<br />
                    <span className="hero-gradient">{gradientText}</span>
                </h1>
                <p className="hero-subtext">
                    {subtext}
                </p>
                <div className="hero-actions">
                    <Button variant='primary' animation='animation'>{buttonText}</Button>
                </div>
            </div>  
        </section>        
    );
}

export default Hero;