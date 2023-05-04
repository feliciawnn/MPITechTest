import '../style/landing.css'

export default function Landing(){
    return (
        <div className="Landing">
          <div className="MainTitle">
            <h1 className='TitleText'>Technical Test</h1>
            <p className='SubTitleText'>by <i><a href="https://www.linkedin.com/in/feliciawinna" target={'_blank'}>Felicia Winna</a></i></p>
          </div>
          <div className="Section">
            <p>Click the button below to see each task</p>
            <div className="ButtonWrapper">
              <a href="/MPITechTest/task1" className='TaskButton'>Task 1</a>
              <a className='TaskButton'>Task 2</a>
              <a href="/MPITechTest/task3" className='TaskButton'>Task 3</a>
            </div>
          </div>
        </div>
      );
}