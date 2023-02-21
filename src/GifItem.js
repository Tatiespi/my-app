const GifItem = ({title, url }) => {
    return (
      <div className="gif-card">
        <img src={url} alt= {title}/>
      </div>
    );
  }