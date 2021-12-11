const Card = ({name, email, id}) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' style={{weight: '200px', height: '200px'}}
                 src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
