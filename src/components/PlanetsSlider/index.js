import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props

    return (
      // eslint-disable-next-line react/no-unknown-property
      <div className="bg-container" testid="planets">
        <h1 className="heading"> PLANETS</h1>
        <Slider
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
        >
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetsDetails={each} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default PlanetsSlider
