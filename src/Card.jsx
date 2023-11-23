import profilePic from './assets/rodrigo.jpg'


function Card (){
    return (
<div className="card">
    <img src={profilePic} alt="profile picture"></img>
    <h2 className="card-title">Rodrigo Neto</h2>
    <p className="card-text">Developer FullStack</p>
</div>
    );
}

export default Card