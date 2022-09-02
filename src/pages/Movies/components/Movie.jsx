export const Movie = ({title, year, imdb, type, poster}) => {
    return <div id={imdb} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">            
            {
                poster === 'N/A' ?
                    <img className="activator" src='https://uprostim.com/wp-content/uploads/2021/04/image024-20.jpg' />
                :
                    <img className="activator" src={poster} />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>        
    </div>
}
