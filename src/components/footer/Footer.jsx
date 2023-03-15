import "./footer.css"
function Footer() {
  return (
    <div className="footer  bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
             <div className="d-flex">
               <div className="p-2 -align-self-end">
                   <i className="fa fa-phone"></i>
               </div>
               <div className="p-2 align-self-start">
                    00249993920698 
               </div>
             </div>
             <div className="d-flex">
             <div className="p-2 -align-self-end">
                   <i className="fa fa-envelope"></i>
               </div>
               <div className="p-2 align-self-start">
                    husseinyoussouf77@gmail.com 
               </div>
             </div>

             <div className="d-flex">
             <div className="p-2 -align-self-end">
                   <i className="fab fa-facebook"></i>
               </div>
               <div className="p-2 align-self-start">
                    <a href="#" className="link text-light main-link">Hussein youssouf</a> 
               </div>
             </div>
             
          </div>
          <div className="col-md-3 offset-md-1">
             <div className="d-flex">
               <div className="p-2 -align-self-end">
                   <i className="fab fa-whatsapp"></i>
               </div>
               <div className="p-2 align-self-start">
                    00249993920698 
               </div>
             </div>
             <div className="d-flex">
             <div className="p-2 -align-self-end">
                  <i class="fab fa-github" aria-hidden="true"></i>
               </div>
               <div className="p-2 align-self-start">
                    Hussein Youssouf 
               </div>
             </div>

             <div className="d-flex">
             <div className="p-2 -align-self-end">
                    <i class="fab fa-linkedin"></i>
               </div>
               <div className="p-2 align-self-start">
                    <a href="#" className="link text-light main-link">Hussein youssouf</a> 
               </div>
             </div>
             
          </div>
          <div className="col-md-3 offset-md-2">
               <p className="lead mt-5">This page created by  hussein youssouf &hearts; 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer