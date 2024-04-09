export default function TimeRangeButtons(props) {

    function getTimepass(type){
        props.setTimeRenge(type)
        props.settimer((old)=>{
            return !old
        })
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={true} onClick={()=>{getTimepass('1H')}} />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">1H</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={()=>{getTimepass('10H')}}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">10H</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={()=>{getTimepass('1D')}}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio3">1D</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onClick={()=>{getTimepass('1S')}}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio4">1S</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" onClick={()=>{getTimepass('1M')}}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio5">1M</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autoComplete="off" onClick={()=>{getTimepass('1A')}}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio6">1A</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio7" autoComplete="off" onClick={()=>{getTimepass('Total')}}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio7">Total</label>
        </div>
    )
}