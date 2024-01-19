import Oval from './Oval'
import TopCircles from './TopCircles'


function PowerBall() {


    return (
        <div>
            <div className="todays-date">
                < Oval />
            </div>
            <div className="top-circles">
                < TopCircles />
                {/* < TopCircles />
                < TopCircles />
                < TopCircles />
                < TopCircles />
                < TopCircles /> */}
            </div>
        </div>
    )
}

export default PowerBall;