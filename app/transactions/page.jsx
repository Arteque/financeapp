import Section from "@/components/shared/Section"
import SectionHeader from "@/components/shared/SectionHeader"
import Container from "@/components/shared/Container"
import Pagetitle from "@/components/shared/Pagetitle"

const page = () => {

  return (
    <>
      <Container>
        <Pagetitle>
          Transactions
        </Pagetitle>
        <div className="main-content__content">
          <div className="main-content__header filter">
            {/* search filter */}
              <div className="filter__search-input">
                <input type="text" name="search" id="search" />
                <button type="submit">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.3536 14.1462L11.2243 11.0175C12.1313 9.92856 12.5836 8.53186 12.487 7.11795C12.3905 5.70404 11.7526 4.38177 10.706 3.42622C9.65938 2.47067 8.28468 1.9554 6.86784 1.9876C5.451 2.0198 4.10112 2.59699 3.09901 3.5991C2.0969 4.60122 1.51971 5.9511 1.48751 7.36793C1.45531 8.78477 1.97058 10.1595 2.92613 11.2061C3.88168 12.2527 5.20395 12.8906 6.61786 12.9871C8.03177 13.0837 9.42846 12.6314 10.5174 11.7244L13.6461 14.8537C13.6926 14.9002 13.7478 14.937 13.8085 14.9622C13.8691 14.9873 13.9342 15.0003 13.9999 15.0003C14.0656 15.0003 14.1307 14.9873 14.1913 14.9622C14.252 14.937 14.3072 14.9002 14.3536 14.8537C14.4001 14.8073 14.437 14.7521 14.4621 14.6914C14.4872 14.6307 14.5002 14.5657 14.5002 14.5C14.5002 14.4343 14.4872 14.3692 14.4621 14.3085C14.437 14.2478 14.4001 14.1927 14.3536 14.1462ZM2.4999 7.49999C2.4999 6.60997 2.76382 5.73994 3.25829 4.99992C3.75275 4.2599 4.45556 3.68313 5.27782 3.34253C6.10009 3.00194 7.00489 2.91282 7.8778 3.08646C8.75072 3.26009 9.55254 3.68867 10.1819 4.31801C10.8112 4.94735 11.2398 5.74917 11.4134 6.62208C11.5871 7.495 11.498 8.3998 11.1574 9.22207C10.8168 10.0443 10.24 10.7471 9.49996 11.2416C8.75994 11.7361 7.88991 12 6.9999 12C5.80683 11.9987 4.66301 11.5241 3.81938 10.6805C2.97575 9.83688 2.50122 8.69306 2.4999 7.49999Z" fill="#201F24"/>
                    </svg>
                </button>
              </div>
            {/* search filter */}
             
            {/* Sort by filter */}
              <div className="filter__dropdown">
                <div className="filter__dropdown items">
                  <div className="items__header">
                    <span className="text">
                      Sort by
                    </span>
                    <span className="icon">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 3L3.75 3C3.41848 3 3.10054 3.1317 2.86612 3.36612C2.6317 3.60054 2.5 3.91848 2.5 4.25L2.5 16.75C2.5 17.0815 2.6317 17.3995 2.86612 17.6339C3.10054 17.8683 3.41848 18 3.75 18H16.25C16.5815 18 16.8995 17.8683 17.1339 17.6339C17.3683 17.3995 17.5 17.0815 17.5 16.75V4.25C17.5 3.91848 17.3683 3.60054 17.1339 3.36612C16.8995 3.1317 16.5815 3 16.25 3ZM5.625 6.125L13.125 6.125C13.2908 6.125 13.4497 6.19085 13.5669 6.30806C13.6842 6.42527 13.75 6.58424 13.75 6.75C13.75 6.91576 13.6842 7.07473 13.5669 7.19194C13.4497 7.30915 13.2908 7.375 13.125 7.375L5.625 7.375C5.45924 7.375 5.30027 7.30915 5.18306 7.19194C5.06585 7.07473 5 6.91576 5 6.75C5 6.58424 5.06585 6.42527 5.18306 6.30806C5.30027 6.19085 5.45924 6.125 5.625 6.125ZM8.75 14.875L5.625 14.875C5.45924 14.875 5.30027 14.8092 5.18306 14.6919C5.06585 14.5747 5 14.4158 5 14.25C5 14.0842 5.06585 13.9253 5.18306 13.8081C5.30027 13.6908 5.45924 13.625 5.625 13.625L8.75 13.625C8.91576 13.625 9.07473 13.6908 9.19194 13.8081C9.30915 13.9253 9.375 14.0842 9.375 14.25C9.375 14.4158 9.30915 14.5747 9.19194 14.6919C9.07473 14.8092 8.91576 14.875 8.75 14.875ZM9.375 11.125L5.625 11.125C5.45924 11.125 5.30027 11.0592 5.18306 10.9419C5.06585 10.8247 5 10.6658 5 10.5C5 10.3342 5.06585 10.1753 5.18306 10.0581C5.30027 9.94085 5.45924 9.875 5.625 9.875H9.375C9.54076 9.875 9.69973 9.94085 9.81694 10.0581C9.93415 10.1753 10 10.3342 10 10.5C10 10.6658 9.93415 10.8247 9.81694 10.9419C9.69973 11.0592 9.54076 11.125 9.375 11.125ZM15.4422 13.4422L13.5672 15.3172C13.5091 15.3753 13.4402 15.4214 13.3643 15.4529C13.2885 15.4843 13.2071 15.5005 13.125 15.5005C13.0429 15.5005 12.9615 15.4843 12.8857 15.4529C12.8098 15.4214 12.7409 15.3753 12.6828 15.3172L10.8078 13.4422C10.6905 13.3249 10.6247 13.1659 10.6247 13C10.6247 12.8341 10.6905 12.6751 10.8078 12.5578C10.9251 12.4405 11.0841 12.3747 11.25 12.3747C11.4159 12.3747 11.5749 12.4405 11.6922 12.5578L12.5 13.3664V9.875C12.5 9.70924 12.5658 9.55027 12.6831 9.43306C12.8003 9.31585 12.9592 9.25 13.125 9.25C13.2908 9.25 13.4497 9.31585 13.5669 9.43306C13.6842 9.55027 13.75 9.70924 13.75 9.875V13.3664L14.5578 12.5578C14.6751 12.4405 14.8341 12.3747 15 12.3747C15.1659 12.3747 15.3249 12.4405 15.4422 12.5578C15.5595 12.6751 15.6253 12.8341 15.6253 13C15.6253 13.1659 15.5595 13.3249 15.4422 13.4422Z" fill="#201F24"/>
                      </svg>
                    </span>
                    
                  </div>
                  <ul className="items__childs">
                    <li className="current">
                      <span className="icon"></span>
                      <span className="text">Latest</span>
                    </li>
                    <li>
                      <span className="icon"></span>
                      <span className="text">Oldest</span>
                    </li>
                    <li>
                      <span className="icon"></span>
                      <span className="text">A to Z</span>
                    </li>
                    <li>
                      <span className="icon"></span>
                      <span className="text">Z to A</span>
                    </li>
                    <li>
                      <span className="icon"></span>
                      <span className="text">Highest</span>
                    </li>
                    <li>
                      <span className="icon"></span>
                      <span className="text">Lowest</span>
                    </li>
                  </ul>
                </div>
              </div>
            {/* Sort by filter */}
          </div>
        </div>
      </Container>
    </>
  )
}

export default page
