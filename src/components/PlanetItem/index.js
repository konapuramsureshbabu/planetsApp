import {Component} from 'react'
import './index.css'

class PlanetItem extends Component {
  render() {
    const {planetsDetails} = this.props
    // console.log(planetDetails)
    const {name, imageUrl, description} = planetsDetails

    return (
      <div className="container">
        <img src={imageUrl} alt={`planet ${name}`} className="img" />
        <h1 className="head">{name}</h1>
        <p className="p">{description}</p>
      </div>
    )
  }
}
export default PlanetItem
