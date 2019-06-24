import React from 'react';

class CourseDetails extends React.Component {

    constructor(props){
        super(props)
        //this.handleCourseClick = this.handleCourseClick.bind(this);
    }
    render(){
        return(
            <h1>{(this.props.selectedCourseId)}</h1>
        )
    }
}
export default CourseDetails;