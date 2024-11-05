'use client'
import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"
import Pagetitle from "@/components/shared/Pagetitle"
import Filter from "@/components/shared/Filter/Filter"
import ContentBoxHeader from "@/components/shared/ContentBoxHeader"
import { TransactionsData } from "@/libs/Calculate"
import { useState, useEffect } from "react"
import ContentboxAvtar from "@/components/shared/ContentboxAvtar"
import { Currency } from "@/libs/currency"
const page = () => {
  const theData = TransactionsData().data
  const [getContent, setGetContent] = useState(theData)
  const [dataCategory, setDataCategory] = useState("All transactions")
  const [sortby, setSortby] = useState("Latest")
  const [pagesNumber, setPagesNumber] = useState()
  const handleCatValue = (e) => {
    setDataCategory(e.target.innerText)
  }
  const handleSortValue = (e) => {
    setSortby(e.target.innerText)
  }
  


  const handleInputValue = (e) => {
    // console.log(e.target.value)
    // if(e.target.value.length < 2) return 
   const newData = [...TransactionsData().data].filter(item => {
     const searchedText = e.target.value.toLowerCase().trim()
     const itemName = item.name.toLowerCase().trim()
      if(itemName.includes(searchedText)){
        return item
      }
    })
   
    setTimeout(() => {
      setGetContent(newData)
    }, 300)

  }




const aTozSort = ()  => {
    setGetContent((items) => {
      const sortedItems = [...items].sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if(nameA < nameB){
          return -1
        }
        if(nameA > nameB){
          return 1
        }
        return 0
      })
      return sortedItems
    })
}
const zToaSort = ()  => {
    setGetContent((items) => {
      const sortedItems = [...items].sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if(nameA > nameB){
          return -1
        }
        if(nameA < nameB){
          return 1
        }
        return 0
      })
      return sortedItems
    })
}
const latestSort = () => {
  setGetContent(items => {
    const sortedItems = [...items].sort((a,b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      if(dateA < dateB){
        return -1
      }
      if(dateA > dateB){
        return 1
      }
      return 0
    })
    return sortedItems
  })
}
const oldestSort = () => {
  setGetContent(items => {
    const sortedItems = [...items].sort((a,b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      if(dateA > dateB){
        return -1
      }
      if(dateA < dateB){
        return 1
      }
      return 0
    })
    return sortedItems
  })
}
const highestSort = () => {
  setGetContent(items => {
    const sortedItems = [...items].sort((a,b) => {
      const priceA = a.amount
      const priceB = b.amount
      if(priceA > priceB){
        return -1
      }
      if(priceA < priceB){
        return 1
      }
      return 0
    })
    return sortedItems
  })
}
const lowestSort = () => {
  setGetContent(items => {
    const sortedItems = [...items].sort((a,b) => {
      const priceA = a.amount
      const priceB = b.amount
      if(priceA < priceB){
        return -1
      }
      if(priceA > priceB){
        return 1
      }
      return 0
    })
    return sortedItems
  })
}
useEffect(() => {
  const filtredData = theData.filter(entry => {
    if(dataCategory == "All transactions") {
      return entry
    }
    if(entry.category == dataCategory ){
      return entry
    }
  }
)
setGetContent(filtredData)
switch (sortby) {
  case 'A to Z':
    aTozSort();
    break;
  case 'Z to A':
    zToaSort();
    break;
  case 'Latest':
    latestSort();
    break;
  case 'Oldest':
    oldestSort();
    break;
  case 'Highest':
    highestSort();
    break;
  case 'Lowest':
    lowestSort();
    break;
  default:
    break;
}


renderPages(getContent)

},[dataCategory, sortby])

const renderPages = (items) => {
  if(items.length < 10) return

  const numberOfPages = Math.round(items.length / 10)
  const numberOfPagesArr = []
  for(let i = 0; i < numberOfPages; i++){
    numberOfPagesArr.push(i)
  }
  
}
  return (
    <>
      <Container className="main-content__container"> 
        <Pagetitle>
          Transactions
        </Pagetitle>
        <Section className="bg-light-400 rounded main-content__content">
            <Container className="padding">
                <ContentBoxHeader>
                    <Filter 
                      sortValue={handleSortValue} 
                      catValue={handleCatValue} 
                      transactions={TransactionsData().data} 
                      inputValue={handleInputValue}
                      catDefaultText={dataCategory}
                      sortDefaultText={sortby}
                    />
                </ContentBoxHeader>
                  {
                    getContent ? getContent.map((item, i) =>(
                      <ContentboxAvtar  
                          key={i} 
                          category={item.category}
                          date={item.date}
                          number={Currency(item.amount)}
                          title={item.name}
                          src={item.avatar}
                      />
                    )
                  ):(
                    <li>loading...</li>
                    )
                  }
                {
                  pagesNumber && (
                    <div className="pagination">
                      <button className="pagination__left">
                        <span className="icon"></span>
                        <span className="text">Prev</span>
                      </button>
                      <ul className="pagination__pages">
                        {
                          pagesNumber.map((item, index) => (
                            <li key={index}>
                              <button>
                                {index + 1}
                              </button>
                            </li>
                          ))
                        }
                      </ul>
                      <button className="pagination__left">
                        <span className="text">Next</span>
                        <span className="icon"></span>
                      </button>
                    </div>
                  )
                }
            </Container>
        </Section>
      </Container>
    </>
  )
}

export default page
