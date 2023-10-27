import "../assets/CSS/dashboardStyle.css";
import BarChart from "../assets/images/bar-chart-outline.png";
import Book from "../assets/images/Book.png";
import Signs from "../assets/images/Signs.png";
import FrameComponent from "../components/FrameComponent";
import DashboardCard from "../components/DashboardCard";

function DashboardView() {
  const cardDetails = [
    {
      heading: "Topic-wise study materials",
      content:
        "Provides detailed explanations, illustrations, and references to relevant sections of the driver's handbook or manual.",
      icon: Book,
      to:"/dashboard/course",
    },
    {
      heading: "Progress Tracking",
      content:
        "Tracks  performance on practice tests and simulations, providing detailed feedback and scores",
      icon: BarChart,
      to:"/dashboard/progress",
    },
    {
      heading: "Practice Tests",
      content:
        "A collection of practice tests that mimic the format and structure of the actual driver's license exam.",
      icon: Signs,
      to:"/dashboard/practice",
    },
    {
      heading: "Road Signs",
      content:
        "A collection of road signs that are containing in the driver's handbook or manual.",
      icon: Signs,
      to:"/dashboard/roadsigns",
    },
  ];
  return (
    <FrameComponent>
      <section>
        <div className="container dashboard__container">
          <div className="dashboard__content">
            <div className="dashboard__title">
              <h1 className="text-center">Welcome to DriveSmart</h1>
            </div>
            {/* <!-- Cards --> */}
            <div className="dashboard__cards">
              {cardDetails.map((card) => {
                return (
                  <DashboardCard card={card} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </FrameComponent>
  );
}

export default DashboardView;
