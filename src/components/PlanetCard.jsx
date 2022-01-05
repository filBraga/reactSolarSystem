import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="PlanetCardClass">
        <div>
          <h3 data-testid="planet-name">{planetName}</h3>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
