import "./portlist.css"
function PortList({id, active, setSelected, title}) {
  return (
    <div className='portlist'>
        <li className={ active ?  'portlist active' : 'portlist'} onClick={() => setSelected(id)}>
 {title}
        </li>
    </div>
  )
}

export default PortList