'use client'

import Section from "./shared/Section"
import SectionHeader from "./shared/SectionHeader"
import ContentboxChart from "./shared/ContentboxChart"
// import data from "@/app/Api/data.json"
import { BudgetsData } from "@/libs/Calculate"
const Budgets = () => {
  const data = BudgetsData()
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
