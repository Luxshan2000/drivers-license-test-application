import '../assets/CSS/dashboardStyle.css'
import BarChart from '../assets/images/bar-chart-outline.png'
import Book from '../assets/images/Book.png'
import Signs from '../assets/images/Signs.png'

function DashboardView() {
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
                        <h5>Progress Tracking</h5>
                        <div className='card__image-details'>
                            <img className="card__image" src={BarChart} alt=""/>
                            <h6>Tracks  performance on 
                            practice tests and simulations, 
                            providing detailed feedback
                            and scores</h6>
                        </div>
                    </a>

                    <a href='##' className='dashboard__card'>
                        <h5>Topic-wise study materials</h5>
                        <div className='card__image-details'>
                            <img className="card__image" src={Book} alt=""/>
                            <h6>Provides detailed 
                            explanations, illustrations, 
                            and references to relevant 
                            sections of the driver's 
                            handbook or manual.</h6>
                        </div>
                        
                    </a>

                    <a href='###' className='dashboard__card'>
                        <h5>Practice Tests</h5>
                        <div className='card__image-details'>
                            <img className="card__image" src={Signs} alt=""/>
                            <h6>A collection of practice tests
                            that mimic the format and structure of the actual driver's
                            license exam.</h6>
                        </div>
                        
                    </a>

                    <a href='####' className='dashboard__card'>
                        <h5>Road Signs</h5>
                        <div className='card__image-details'>
                            <img className="card__image" src={Signs} alt=""/>
                            <h6>A collection of road signs
                            that are containing in the driver's 
                            handbook or manual.</h6>
                        </div>
                        
                    </a>

                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default DashboardView
