import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div>
                <h2 className='actor'>Actor : {props.actor}</h2>
                <h2 className='actor'>Character : {props.character}</h2>
            </div>
        </>
    )
}

export default Cast
