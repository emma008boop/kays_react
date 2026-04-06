import Tag from '../../../ui/tag/Tag';
import VideoBackground from '../../../ui/video/VideoBackground';
import './DinamContainer.css';
const DinamContainer = ({ type, videoUrl, tag, title, text  }) => {
  const containerClass = type === 'antfocus' ? 'dinamContainer--antfocus' : 'dinamContainer--default';
  
  return (
    <section className={`dinamContainer ${containerClass}`}>
      <VideoBackground videoUrl={videoUrl} />

      <div className="dinamContainer__content">
        <header className="dinamContainer__header">
            <Tag tag={tag}></Tag>
            <h2 className="dinamContainer__title">{title}</h2>
            <p className="dinamContainer__text">
              {text}
            </p>
        </header>
        
      
        </div>
    </section>
  );
};

export default DinamContainer;