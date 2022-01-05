import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (

      <div data-testid="mission-card" className="MissionCardClass">
        <span data-testid="mission-name">{name}</span>
        <br />
        <span data-testid="mission-year">{year}</span>
        <br />
        <span data-testid="mission-country">{country}</span>
        <br />
        <span data-testid="mission-destination">{destination}</span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
