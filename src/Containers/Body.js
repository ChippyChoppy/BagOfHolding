import React from 'react'
import CharacterClass from '../Components/CharacterClass'
import BagOfHolding from './BagOfHolding'

class Body extends React.Component {
    state = {
        classArray: []
    }
    componentDidMount() {
        fetch('https://www.dnd5eapi.co/api/classes/')
            .then(response => response.json())
            .then(classData => {
                console.log(classData)
                this.setState({ classArray: classData.results })
                console.log(this.state.classArray[0])
            })
    }

    renderClassDetails = () => {
        return this.state.classArray.map(charClass => <CharacterClass key={charClass.id} charClassDeets={charClass} /> ) 
    }
    render() {
        return (
        <div>
            <h1>Bag of Holding</h1>
            {this.renderClassDetails()}
            <BagOfHolding />
        </div>
        )
    }
}

export default Body