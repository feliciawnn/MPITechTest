import React, { useState } from 'react'
import '../style/countchar.css'

export default function CountChar(){
    const [numberSequence, setNumberSequence] = useState(0)

    const countChar = (e) => {
        e.preventDefault()

        var numSeq = numberSequence
        var seqArr = Array.from(String(numSeq), Number)
        const TOTALNUM = 10
        var countArr = [TOTALNUM]
        for(let i=0; i<TOTALNUM; i++){
            countArr[i] = 0
        }

        for(let i=0; i<seqArr.length; i++){
            var curIndex = seqArr[i]
            countArr[curIndex] += 1
        }

        //output result array
        var outputdiv = document.getElementById('outputdiv')
        var outputString = ""
        
        for(let i=0; i<TOTALNUM; i++){
            var temp = "The number " + i + " appears " + countArr[i] + " times <br>"
            outputString += temp
        }

        outputdiv.innerHTML = outputString
    }

    const resetForm = () => {
        console.log('masuk')
        setNumberSequence("")
        console.log(numberSequence)

        var outputdiv = document.getElementById('outputdiv')
        outputdiv.innerHTML = ""
    }

    return(
        <div className='CountChar'>
            <div className='Title'>
                <h1>Task 1: Unique Number Counter</h1>
                <p>Enter any number sequence in the box below and click the blue <b>Count</b> button<br />
                The counter will then show you how many occurances of each number appeared on your sequence.<br /><br />
                <i>Note that this counter does not account for the negative symbol (-)</i></p>
            </div>

            <div className='FormContainer'>
                <form className='FormWrapper'>
                    <input className='InputBox' id='inputBox' type={"number"} placeholder={"Enter your number sequence"} onChange={(e) => {setNumberSequence(e.target.value)}}/>
                    <input className='Submit FormBtn' type={"submit"} value={"Count"} onClick={(e) => {countChar(e)}} />
                    <input className='Reset FormBtn' type={"reset"} value={"Reset"} onClick={resetForm} />
                </form>
                
                
            </div>

            <p className="output" id="outputdiv"></p>

            <div className='backBtnContainer'>
                <a className="backBtn" href='/MPITechTest'>Back to Home</a>
            </div>
        </div>
    )
}