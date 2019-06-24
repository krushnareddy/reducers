import React from 'react';
import axios from 'axios';

class AddCourse extends React.Component{

  constructor(props){
      super(props)
      this.state = {
        id:'',
        courseName:'',
        coursePrice:'',
        courseDuration:'',
        invalidCourseName:'',
        invalidPrice:'',
        invalidDuration:''
      }
      this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
      this.handleCoursePriceChange = this.handleCoursePriceChange.bind(this);
      this.handleCourseDurationChange = this.handleCourseDurationChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCourseNameChange(event){
    console.log(event.target.value);
    let courseName = event.target.value;
    this.setState({
      courseName:event.target.value
    })
    if(courseName.length < 8 ){
      this.setState({
        invalidCourseName:'Name Should be 4 - 8 Digits'
      })
    }else{
      this.setState({
        invalidCourseName:''
      })
    }
  }

  handleCoursePriceChange(event){
    console.log(event.target.value);
    let coursePrice = event.target.value;
    this.setState({
      coursePrice:event.target.value
    })
    if(coursePrice.length < 5 ){
      this.setState({
        invalidPrice:'Price Should be 5 Digits'
      })
    }else{
      this.setState({
        invalidPrice:''
      })
    }
  }

  handleCourseDurationChange(event){
    console.log(event.target.value);
    let courseDuration = event.target.value;
    this.setState({
      courseDuration:event.target.value
    })
    if(courseDuration.length < 2 ){
      this.setState({
        invalidDuration:'Duration Should be 2 Digits'
      })
    }else{
      this.setState({
        invalidDuration:''
      })
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event.target.courseName.value);
    const course = {};
     
      course.id = this.props.courses.length + 1;
      course.courseName = event.target.courseName.value;
      course.coursePrice = event.target.coursePrice.value;
      course.courseDuration = event.target.courseDuration.value;

      this.props.addCourse(course);
    
        // const promise = axios.post('https://my-json-server.typicode.com/krushnareddy/courses/course',{
        //     method:'POST',
        //     body:course
        // })
        // promise.then(response => response.data)
}
    render(){
        return(
            <div>
                 <form onSubmit={(event)=> this.handleSubmit(event)}>
                  <div class="form-group">
                    <label class="control-label col-sm-2" >Course Name:</label>
                    <div class="col-sm-8">
                      <input type="text" 
                        class="form-control" 
                        id="courseName" 
                        placeholder="Enter Course Name" 
                        name="courseName"
                        onChange={(event)=> this.handleCourseNameChange(event)}/>
                    </div>
                  </div>  
                  <div>
                            { this.state.invalidCourseName ? (<span className="alert alert-danger">{this.state.invalidCourseName}</span>)
                                                           :''
                            }
                            
                        </div>              
                  <div class="form-group">
                        <label class="control-label col-sm-2" >Course Price:</label>
                        <div class="col-sm-8">          
                          <input type="text" 
                          class="form-control" 
                          id="coursePrice" 
                          placeholder="Enter Course Price" 
                          name="coursePrice" 
                          onChange={(event)=> this.handleCoursePriceChange(event)}/>
                        </div>
                    </div>
                    <div>
                            { this.state.invalidPrice ? (<span className="alert alert-danger">{this.state.invalidPrice}</span>)
                                                           :''
                            }
                            
                        </div>     
                    <div class="form-group">
                        <label class="control-label col-sm-2" >Course Duration:</label>
                        <div class="col-sm-8">          
                          <input type="text" 
                          class="form-control" 
                          id="courseDuration" 
                          placeholder="Enter Course Duration" 
                          name="courseDuration" 
                          onChange={(event)=> this.handleCourseDurationChange(event)}/>
                        </div>
                    </div>
                  <div class="form-group">        
                    <div class="col-sm-offset-2 col-sm-8">
                      <button type="submit" id="add_products"  class="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
            </div>
        );
    }
}
export default AddCourse;