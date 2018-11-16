import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="location">
            <h1>Location</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList