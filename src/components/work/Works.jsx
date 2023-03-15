import  "./work.css"
import { useState, useEffect } from "react"
import PortList from "../portlist/PortList"
import { allPort, webPort , webdePort } from "../../data"
function Work () {
    const [selected, setSelected] = useState('all')
    const [data, setData]  = useState([])
    const list  = [
        {id: 'all', title: 'All'},
        {id: 'web app', title: 'Web App'},
        {id: 'web design', title: 'Web Design'},
    ]
    useEffect(() => {
      switch(selected) {
        case 'all' : 
           setData(allPort)
           break;
           case 'web app' : 
           setData(webPort)
           break;
           case 'web design' : 
           setData(webdePort)
           break;
           default : 
           setData(allPort)
            
      }
    }, [selected])
    return (
        <div className="work">
            <h2 className="text-center main-title">Portfolio</h2>
            <ul className="list-unstyled text-center d-flex justify-content-center mt-5">
                {list.map((item) => (
                    <PortList active={selected === item.id}
                      title={item.title}
                      setSelected={setSelected}
                      id={item.id}
                      />
                ))}
            </ul>
            <div className="container my-5">
                <div className="row">
              {data.map((d) => (
                                <div className="col-md-4 mb-3">
                                <div class="card card-work text-left shadow-md">
                                      <img class="card-img-top" src={d.img} alt=""/>
                                     <h4 class="card-title">{d.title}</h4>
                                    </div>
                                </div>
            
              ))}
                </div>
            </div>
        </div>
    )
}
export default Work