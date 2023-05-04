import '../style/sumorder.css'

export default function SumOrder(){
    return(
        <div className='SumOrder'>
            <div className='Title'>
                <h1>Task 2: Order Total Sum</h1>
                <p>This task was done using <b>python</b>.<br/>
                To run this program please navigate to the Task_2 directory in this <a href="https://github.com/feliciawnn/MPITechTest">GitHub project</a><br />
                And run it using your local IDE<br /></p>
            </div>

            <div className='examples'>
                <p>
                    If you have entered a valid array of OrderItem, <br />
                    The output would be shown in your terminal with the receipt format below </p>
                <img src={require('../media/task2_output.png')} className='exImg'/>
                <p><b>Otherwise, an error message will be shown.</b></p>
            </div>

            <div className='backBtnContainer'>
                <a className="backBtn" href='/MPITechTest'>Back to Home</a>
            </div>
        </div>
    )
}