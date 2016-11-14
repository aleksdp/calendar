import React from 'react'
import TimeBox from './TimeBox'

export default class Schedule extends React.Component{

    check = (data, interval) => {
        for(let i in data){
            if(data.hasOwnProperty(i)){
                const int = data[i]
                if(
                    (int.bt <= interval[0] && interval[0] <= int.et) &&
                    (int.et >= interval[1] && interval[1] >= int.bt)
                ){
                    return {index: i}
                }
            }
        }
        return false
    }


    render(){
        const {data} = this.props
        const {addInterval, removeInterval, allDay} = this.props.actions
        return(
            <div>
                <div className='schedule'>
                    <div className='header'>
                        <div className='row'>
                            <div className='col-xs-1'><div className='box'></div></div>
                            <div className='col-xs-1'><div className='box'>ALL DAY</div></div>
                            <div className='col-xs-1'><div className='box'>00:00</div></div>
                            <div className='col-xs-1'><div className='box'>03:00</div></div>
                            <div className='col-xs-1'><div className='box'>06:00</div></div>
                            <div className='col-xs-1'><div className='box'>09:00</div></div>
                            <div className='col-xs-1'><div className='box'>12:00</div></div>
                            <div className='col-xs-1'><div className='box'>15:00</div></div>
                            <div className='col-xs-1'><div className='box'>18:00</div></div>
                            <div className='col-xs-1'><div className='box'>21:00</div></div>
                        </div>
                    </div>
                    <div>
                        {
                            (()=>{
                                let _days = []
                                let i = 0
                                for(let _day in data){
                                    if(data.hasOwnProperty(_day)){
                                        const day = data[_day]
                                        _days.push(
                                            <div className='row day' key={i}>
                                                <div className='col-xs-1'>{_day}</div>
                                                <div className='col-xs-1'>
                                                    <input type='checkbox' checked={this.check(day, [0, 1439])}
                                                           onChange={()=>{
                                                               const {index} = this.check(day, [0, 1439])
                                                               index ? removeInterval(_day, index): allDay(_day)
                                                           }}/>
                                                </div>
                                                <TimeBox intervals={[[0, 59], [60, 119], [120, 179]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[180, 239], [240, 299], [300, 359]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[360, 419], [420, 479], [480, 539]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[540, 599], [600, 659], [660, 719]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[720, 779], [780, 839], [840, 899]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[900, 959], [960, 1019], [1020, 1079]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[1080, 1139], [1140, 1199], [1200, 1259]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>
                                                <TimeBox intervals={[[1260, 1319], [1320, 1379], [1380, 1439]]} check={this.check} actions={{addInterval, removeInterval, allDay}} day={day} _day={_day}/>

                                            </div>
                                        )
                                        i++
                                    }
                                }
                                return _days
                            })()
                        }
                    </div>
                </div>
                <div>
                    {JSON.stringify(data)}
                </div>
            </div>
        )
    }
}