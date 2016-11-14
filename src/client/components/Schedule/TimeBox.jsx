import React from 'react'

export default class TimeBox extends React.Component{
    render(){
        const {intervals, actions, day, check, _day} = this.props
        const handleClick = (index, interval) => () => {
            index ? actions.removeInterval(_day, index.index): actions.addInterval(_day, interval)
        }

        return (
            <div className='col-xs-1 time'>
                <div className='box'>
                    <div className='row time-box'>
                        {intervals.map((interval, key)=>(
                            <div key={key} className={`col-xs-4 ${check(day, interval) ? 'active': ''}`} onClick={handleClick(check(day, interval), interval)}></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}