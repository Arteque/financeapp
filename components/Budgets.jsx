import Section from "./shared/Section"
import SectionHeader from "./shared/SectionHeader"
import ContentboxChart from "./shared/ContentboxChart"
import data from "@/app/Api/data.json"
const Budgets = () => {
  return (
    <Section className="chart-section main-content__chart">
          <div className="content-box bg-light-400">
            {/* Box Header */}
            <SectionHeader 
              titleText="Budgets"
              linkUrl="budgets"
            />
            
            {/* Box Header */}
            <ContentboxChart jsonData={data}/>
            
          </div>
    </Section>
  )
}

export default Budgets
