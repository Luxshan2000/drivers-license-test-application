import '../assets/CSS/dashboard.css'
import BarChart from '../assets/images/bar-chart-outline.png'
import Book from '../assets/images/Book.png'
import Signs from '../assets/images/Signs.png'

function Dashboard() {
  return (
    <section>
        <div className='container dashboard__container'>
            <div className='dashboard__content'>
                <div className='dashboard__title'>
                    <h1 className="text-center">Welcome to DriveSmart</h1>
                </div>
                {/* <!-- Cards --> */}
                <div className='dashboard__cards'>

                    <a href='#' className='dashboard__card'>
                        <h4>Progress Tracking</h4>
                        <div className='card__image-details'>
                            <img className="card__image" src={BarChart} alt=""/>
                            <h5>Tracks  performance on 
                            practice tests and simulations, 
                            providing detailed feedback
                            and scores</h5>
                        </div>
                    </a>

                    <a href='##' className='dashboard__card'>
                        <h4>Topic-wise study materials</h4>
                        <div className='card__image-details'>
                            <img className="card__image" src={Book} alt=""/>
                            <h5>Provides detailed 
                            explanations, illustrations, 
                            and references to relevant 
                            sections of the driver's 
                            handbook or manual.</h5>
                        </div>
                        
                    </a>

                    <a href='###' className='dashboard__card'>
                        <h4>Practice Tests</h4>
                        <div className='card__image-details'>
                            <img className="card__image" src={Signs} alt=""/>
                            <h5>A collection of practice tests
                            that mimic the format and structure of the actual driver's
                            license exam.</h5>
                        </div>
                        
                    </a>

                    <a href='####' className='dashboard__card'>
                        <h4>Road Signs</h4>
                        <div className='card__image-details'>
                            <img className="card__image" src={Signs} alt=""/>
                            <h5>A collection of road signs
                            that are containing in the driver's 
                            handbook or manual.</h5>
                        </div>
                        
                    </a>

                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Dashboard
