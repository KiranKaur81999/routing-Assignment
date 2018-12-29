import React, { Component } from 'react';
import Course from '../Course/Course';
import  {Link, Route} from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

componentDidMount(){
    console.log(this.props);
}

clickHandler=(id,title)=>{
    this.props.history.push('/Courses/' + id);
    this.props.history.queryParams = title;
}

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
            
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                              <article className="Course" key={course.id} 
            onClick={()=>this.clickHandler(course.id,course.title)}>
                                  {course.title}</article>
                        )
                        } 
                    )
}
                </section>
<Route path={this.props.match.url + '/:id'} exact component={Course}/>

            </div>
        );
    }
}

export default Courses;