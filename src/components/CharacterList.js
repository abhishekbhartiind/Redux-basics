import React, { Component } from 'react'
import {connect} from 'react-redux';

class CharacterList extends Component {
  render() {
    console.log('this.props ', this.props);
    return (
      <div>
        <h4>CharacterList</h4>
        <ul>
            {
                this.props.characters.map(character => {
                    return (
                        <li key= {character.id}>
                            <div>{character.name}</div>
                        </li>
                    )
                })
            }
        </ul>
        <hr/>
        <ul>
            {this.props.heroes.map(hero => {
                return (
                    <li>
                        {hero.name}
                    </li>
                )
            })}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    console.log('state' , state);
    return {
        characters: state.characters,
        heroes: state.heroes
    }
}
export default connect(mapStateToProps, null)(CharacterList)

// return another fn called as redux, args will be 2