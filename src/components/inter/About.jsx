import "./about.css"
import { init } from 'ityped'
import  {useEffect, useRef} from 'react'
function About() {
    const textRef  =  useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: false, strings:["Full stack web developer", "Backend", "Frontend"],
        })
    }, []);
  return (
    <div className='about d-flex align-items-center'>
         <div className="container">
            <div className="row my-5">
                <div className="col-md-5">
                    <div className="image-container">
                        <img src="images/hussein.jpg" className="img-fluid rounded-circle" alt="" />
                    </div>
                </div>
                <div className="col-md-6 offset-md-1 my-5">
                    <h2 className="">Hi there , i'm        
                     </h2>
                     <h2 className="lead"> Hussein Youssouf </h2>
                     <h6  ref={textRef}> 
                     </h6>

                </div>
                <div className="col-md-6 offset-md-6 my-5 col-xs-6 offset-xs-6 ">
                    <div className="go-down">
                        <i className="fas fa-angle-double-down fa-2x"></i>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default About