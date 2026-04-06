import Hero from '../../components/layout/landing/home/Hero';
import './Home.css';
const Home = () => {
    const HERO_CONTENT = {
        label : "Stop bleeding cash on $7 lattes.",
        tittle : "Put your wallet ",
        gradient : "under managament.",
        subtext : "Define your goal. Track every cent. Reach it faster.",
        buttonText : "Create account"
    };

    return (
            <main className="home-page">
                <Hero 
                    label={HERO_CONTENT.label}
                    tittle={HERO_CONTENT.tittle} 
                    gradientText={HERO_CONTENT.gradient}
                    subtext={HERO_CONTENT.subtext}
                    buttonText={HERO_CONTENT.buttonText}
                />             
                    

            </main>
    );
};

export default Home;