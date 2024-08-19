// component
import ExpertAdviceCard from "./ExpertAdviceCard.jsx"
// assets
import houseImgOne from "../../assets/dashboard-assets/jeftine_kuce_blog_1.jpg"
import houseImgTwo from "../../assets/dashboard-assets/jeftine_kuce_blog_2.jpg"
import houseImgThree from "../../assets/dashboard-assets/jeftine_kuce_blog_3.jpg"


const ExpertAdvices = () => {
  return (
    <section className="expert-advice py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="fs-1 fw-bold">
            Saveti stručnjaka
          </h2>
        </div>

        <div className="row">
          {/* row item 1 */}
          <ExpertAdviceCard cardImg={houseImgOne} cardMonth="April" />

          {/* row item 2 */}
          <ExpertAdviceCard cardImg={houseImgTwo} cardMonth="Maj" />

          {/* row item 3 */}
          <ExpertAdviceCard cardImg={houseImgThree} cardMonth="Jun" />

        </div>
      </div>
    </section>
  )
}

export default ExpertAdvices