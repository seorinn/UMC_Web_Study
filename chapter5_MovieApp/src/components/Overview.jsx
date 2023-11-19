import "../styles/Overview.css";

function Overview({title, overview}){
    return(
        <div className="Overview">
            <div className="title">{title}</div>
            <div className="overview">{overview}</div>
        </div>
    )
}

export default Overview;