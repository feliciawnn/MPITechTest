import '../style/landing.css'

export default function Landing(){
    return (
        <div className="Landing">
          <div className="MainTitle">
            <h1>Technical Test</h1>
            <p>by <i><a href="https://www.linkedin.com/in/feliciawinna" target={'_blank'}>Felicia Winna</a></i></p>
          </div>
          <div className="Section">
            <p>Click the button below to see each task</p>
            <div className="ButtonWrapper">
              <a href="/task1" className='TaskButton'>Task 1</a>
              <a className='TaskButton'>Task 2</a>
              <a className='TaskButton'>Task 3</a>
            </div>
          </div>
        </div>
      );
}