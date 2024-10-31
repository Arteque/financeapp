'use client'
import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"
import Pagetitle from "@/components/shared/Pagetitle"
import Filter from "@/components/shared/Filter/Filter"
import ContentBoxHeader from "@/components/shared/ContentBoxHeader"
import { TransactionsData } from "@/libs/Calculate"
import { useState, useEffect } from "react"
import ContentboxAvtar from "@/components/shared/ContentboxAvtar"
const page = () => {

  const [category, setCategory] = useState("All Transactions")
  const [sortby, setSortby] = useState("Latest")


const [filter, setFilter] = useState()


const handleCatValue = (e) => {
  setCategory(e.target.innerText)
}
const handleSortValue = (e) => {
  setSortby(e.target.innerText)
}
 
useEffect(()=> {
  setFilter({
    data: TransactionsData().data,
    pages: Math.round(TransactionsData().data / 10),
    cat: category,
    sort: sortby
  })
  console.log(category)
  console.log(sortby)
},[])


  return (
    <>
      <Container className="main-content__container"> 
        <Pagetitle>
          Transactions
        </Pagetitle>
        <Section className="bg-light-400 rounded main-content__content">
            <Container className="padding">
                <ContentBoxHeader>
                    <Filter sortValue={handleSortValue} catValue={handleCatValue}/>
                </ContentBoxHeader>
                <div className="page" datapage="1">

                </div>
                <div className="pagination">
                  <button className="pagination__left">
                    <span className="icon"></span>
                    <span className="text">Prev</span>
                  </button>
                  <ul className="pagination__pages">

                  </ul>
                  <button className="pagination__left">
                    <span className="text">Next</span>
                    <span className="icon"></span>
                  </button>
                </div>
            </Container>
        </Section>
      </Container>
    </>
  )
}

export default page
