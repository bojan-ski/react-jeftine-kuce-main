// components
import Hero from "../components/dashboardPage/Hero.jsx"
import ExpertAdvices from "../components/dashboardPage/ExpertAdvices.jsx"
import Testimonials from "../components/dashboardPage/Testimonials.jsx"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* hero component */}
      <Hero />

      {/* expert advices component */}
      <ExpertAdvices />

      {/* testimonials component */}
      <Testimonials />
    </div>
  )
}

export default Dashboard