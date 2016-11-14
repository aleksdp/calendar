import React from 'react'
import Schedule from '../components/Schedule'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


const addInterval = (day, int) => dispatch =>{
    dispatch({
        type: '@Schedule/ADD_INTERVAL',
        payload: {
            day: day,
            int: int
        }
    })
}
const removeInterval = (day, index) => dispatch =>{
    dispatch({
        type: '@Schedule/REMOVE_INTERVAL',
        payload: {
            day: day,
            index: index
        }
    })
}
const allDay = (day) => dispatch =>{
    dispatch({
        type: '@Schedule/ALL_DAY',
        payload: {
            day: day
        }
    })
}

@connect((state)=>({
    schedule: state.schedule
}), (dispatch)=>({
    actions: bindActionCreators({addInterval, removeInterval, allDay}, dispatch)
}))
export default class SchedulePage extends React.Component{
    render(){
        const {schedule} = this.props
        return(
            <Schedule data={schedule} actions={this.props.actions}/>
        )
    }
}