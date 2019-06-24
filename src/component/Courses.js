import React from 'react';

class Courses extends React.Component {
   
  constructor(props){
      super(props);
  }

  componentDidMount(){
    // console.log('component mounted ....')
    // this.props.removeCourse(0);
}

  render(){
      console.log(this.props);
      return (
          <div>
            <div className="container">
              {
                  this.props.courses.length > 0 ? (
                      <ul>
                      {
                          this.props.courses.map(course => <div className="panel panel-default" id={course.id}
                                  key={course.id} onClick={()=>{this.props.removeCourse(course.id)}}>{course.courseName}<br></br>{course.coursePrice} </div>)
                      }
                      </ul>
                  ): <h1> There are no Courses for Display </h1>
              }
              </div>
          </div>  
      );
  }
}

export default Courses;