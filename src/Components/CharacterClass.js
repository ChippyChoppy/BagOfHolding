import React from 'react'

class CharacterClass extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
              <p>{this.props.charClassDeets.name}</p> 
               
            </div>
        )
    }
}

export default CharacterClass