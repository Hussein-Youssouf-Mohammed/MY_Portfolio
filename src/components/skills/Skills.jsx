import "./skill.css"
function Skills() {
  return (
    <div className="myskills my-5" id="myskill">
      <h2 className="text-center main-title">My Skills</h2>
      <div className="container my-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">
              <h5 className="">Html & Css</h5>
                <span className="d-flex justify-content-end">90%</span>
               <div className="progress mb-5 d-flex">
                <div className="progress-bar bg-dark h-css"></div>
               </div>

               <h5>Bootstrap & js</h5>
                <span className="d-flex justify-content-end">90%</span>
               <div className="progress mb-5 d-flex">
                <div className="progress-bar bg-dark h-css"></div>
               </div>

               <h5>Vue js & React js & Nuxt js</h5>
                <span className="d-flex justify-content-end">90%</span>
               <div className="progress mb-5 d-flex">
                <div className="progress-bar bg-dark h-css"></div>
               </div>

               <h5>Laravel & Node js & Express </h5>
                <span className="d-flex justify-content-end">90%</span>
               <div className="progress mb-5 d-flex">
                <div className="progress-bar bg-dark h-css"></div>
               </div>

               <h5>MySql & Mongodb</h5>
                <span className="d-flex justify-content-end">90%</span>
               <div className="progress mb-5 d-flex">
                <div className="progress-bar bg-dark h-css"></div>
               </div>

               <h5>Rest Apis & Git</h5>
                <span className="d-flex justify-content-end">90%</span>
               <div className="progress mb-5  d-flex">
                <div className="progress-bar bg-dark h-css"></div>
               </div>   

            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills