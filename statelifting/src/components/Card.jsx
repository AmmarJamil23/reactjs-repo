import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=> {
            props.setName(e.target.value)

        }} />
        <p>Name state variable inside Card :{props.name}
             : {props.title}
        </p>
    </div>
  )
}

export default Card