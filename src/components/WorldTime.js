import '../styles/worldTimeComponent.scss'

class WorldTime extends React.Component {
    render() {
        return (
            <div className="wtc-container">
                <h1 className="wtc-header">Time data for { this.props.data.timezone }</h1>
                <p>Time: { Date(this.props.data.datetime) }</p>
                <p>Day Of Week: { this.props.data.day_of_week }</p>
                <p>Day Of Year: { this.props.data.day_of_year }</p>
                <p>Week: { this.props.data.week_number }</p>
                <p>UTC Offset: { this.props.data.utc_offset }</p>
            </div>
        );
    };
};


export default WorldTime;