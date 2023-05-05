import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faFile } from '@fortawesome/free-solid-svg-icons'

export default function StepBar(pageNum){

    console.log(pageNum,'???')

    pageNum = pageNum.pageNum

    if(pageNum == 1){
    return(
        <div className="StepBar">
            <div class="step">
                <div>
                    <div class="circle step-active"><FontAwesomeIcon icon={faLocationDot} /></div>
                </div>
                <div>
                    <div class="IconDesc">Pendaftaran Sarana</div>
                </div>
                </div>
                <div class="step">
                <div>
                    <div class="circle"><FontAwesomeIcon icon={faFile} /></div>
                </div>
                <div>
                    <div class="IconDesc">Register</div>
                </div>
            </div>
        </div>
    )
    }
    else{
        return(
            <div className="StepBar">
                <div class="step">
                    <div>
                        <div class="circle step-active"><FontAwesomeIcon icon={faLocationDot} /></div>
                    </div>
                    <div>
                        <div class="IconDesc">Pendaftaran Sarana</div>
                    </div>
                    </div>
                    <div class="step step-active">
                    <div>
                        <div class="circle step-active"><FontAwesomeIcon icon={faFile} /></div>
                    </div>
                    <div>
                        <div class="IconDesc">Register</div>
                    </div>
                </div>
            </div>
        )
    }
}