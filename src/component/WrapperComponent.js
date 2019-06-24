import {connect} from 'react-redux';
import Courses from './Courses';
import {bindActionCreators} from 'redux';
import {removeCourse} from '../reducer/actions';
import {addCourse} from '../reducer/actions';
import AddCourse from './AddCourse';

function mapStateToProps(state){
    return {
      courses:state
    }
  }
  

  function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCourse}, dispatch)
  }  
  function addDispatchToProps(dispatch){
    return bindActionCreators({addCourse}, dispatch)
  }
  export const WrapperComponent = connect(mapStateToProps,mapDispatchToProps)(Courses)
  export const WrapperComponentadd = connect(mapStateToProps,addDispatchToProps)(AddCourse)