function Contact() {
  return (
    <div className="contact my-5 py-5">
        <h2 className="text-center main-title">Contact Me</h2>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    image
                </div>
                <div className="col-md-6 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                        <form>
                        <div className="form-group">
                           <label htmlFor="name">Enter Your name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="email">Enter Your Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="name">Enter Your Message</label>
                            <textarea name="" className="form-control" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                           <button className="btn btn-dark">Send Message</button>
                        </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact