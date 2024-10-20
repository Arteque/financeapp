import Section from "./shared/Section"
import Contentbox from "./shared/Contentbox"
import { Currency } from "@/libs/currency"
import data from "@/app/Api/data.json"

const Global = () => {
    const dataBalance = data.balance
  return (
    <Section className="grid-cols grid-cols--3 main-content__balance">
            {
              dataBalance && (
                  <>
                      <Contentbox className="bg-dark-100 text-light-400">
                        <h3 className="content-box__title text__sm">
                          Current Balance
                        </h3>
                        <div className="content-box__data text__lg text__bold">
                          <p>
                            {Currency(dataBalance.current)}
                          </p>
                        </div>
                      </Contentbox>
                      <Contentbox className="bg-light-400">
                          <h3 className="content-box__title text__sm">
                            Income
                          </h3>
                          <div className="content-box__data text__lg text__bold">
                            <p>
                              {Currency(dataBalance.income)}
                            </p>
                          </div>
                      </Contentbox>
                      <Contentbox className="bg-light-400">
                          <h3 className="content-box__title text__sm">
                            Expenses
                          </h3>
                          <div className="content-box__data text__lg text__bold">
                            <p>
                              {Currency(dataBalance.expenses)}
                            </p>
                          </div>
                      </Contentbox>
                  </>
              )
            }
        </Section>
  )
}

export default Global
