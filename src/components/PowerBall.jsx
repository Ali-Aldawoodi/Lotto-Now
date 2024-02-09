import BottomCircles from './BottomCircles';
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
            </div>
            <div>
                < BottomCircles />
            </div>
        </div>
    )
}

export default PowerBall;