//Styling
import header from "./header.module.css"

import Image from "next/image" 
import Link from "next/link"
//Icons
import LogoLarge from "@/public/assets/images/logo-large.svg"
import LogoSmall from "@/public/assets/images/logo-small.svg"

import Minimizemenu from "@/public/assets/images/icon-minimize-menu.svg"
import Pagetitle from "../shared/Pagetitle"


 const Header = () => {
  return (
   <header className={`main-header bg-dark-100 ${header.mainheader}`} id="main-header">
      <div className="main-header__logo">
        <Pagetitle>
            <Image className={header.logolarge} src={LogoLarge} alt="Finance large logo" loading="eager" />
            <Image className={header.logosmall} src={LogoSmall} alt="Finance small logo" loading="eager" />
        </Pagetitle>
      </div>
      <nav className="main-header__nav">
        <ul className="main-header__nav-items">
          <li className="current">
            <Link href="/">
              <span className="icon">
                <svg width="19" height="19" viewBox="0 0 19 19">
                    <path d="M18.3 8.83281L18.3 17.5C18.3 17.8978 18.142 18.2793 17.8607 18.5607C17.5794 18.842 17.1979 19 16.8 19H13.05C12.6522 19 12.2707 18.842 11.9894 18.5607C11.7081 18.2793 11.55 17.8978 11.55 17.5L11.55 13.75C11.55 13.5511 11.471 13.3603 11.3304 13.2197C11.1897 13.079 10.999 13 10.8 13H7.80005C7.60114 13 7.41037 13.079 7.26972 13.2197C7.12907 13.3603 7.05005 13.5511 7.05005 13.75L7.05005 17.5C7.05005 17.8978 6.89201 18.2793 6.61071 18.5607C6.3294 18.842 5.94787 19 5.55005 19H1.80005C1.40222 19 1.02069 18.842 0.739389 18.5607C0.458084 18.2793 0.300049 17.8978 0.300049 17.5L0.300049 8.83281C0.300017 8.6252 0.343079 8.41986 0.42651 8.22976C0.50994 8.03966 0.631922 7.86895 0.784736 7.72843L8.28474 0.65218L8.29505 0.641867C8.57118 0.390742 8.93102 0.251587 9.30427 0.251587C9.67751 0.251587 10.0374 0.390742 10.3135 0.641867C10.3167 0.645536 10.3201 0.648981 10.3238 0.65218L17.8238 7.72843C17.9751 7.86969 18.0955 8.04073 18.1775 8.2308C18.2594 8.42086 18.3012 8.62583 18.3 8.83281Z" fill="#B3B3B3"/>
                </svg>
              </span>
              <span className="text">
                 Overview
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 18 18">
                    <path d="M8.09282 13.2129C8.14967 13.3499 8.1646 13.5007 8.13573 13.6462C8.10686 13.7917 8.03549 13.9254 7.93063 14.0304L4.93063 17.0304C4.86098 17.1001 4.77826 17.1554 4.68721 17.1932C4.59616 17.2309 4.49857 17.2503 4.40001 17.2503C4.30144 17.2503 4.20385 17.2309 4.1128 17.1932C4.02175 17.1554 3.93903 17.1001 3.86938 17.0304L0.86938 14.0304C0.764371 13.9255 0.692846 13.7918 0.663858 13.6462C0.63487 13.5007 0.649723 13.3498 0.706538 13.2126C0.763352 13.0755 0.859573 12.9583 0.983018 12.8759C1.10646 12.7935 1.25158 12.7496 1.4 12.7497H3.65001L3.65001 1.49974C3.65001 1.30082 3.72902 1.11006 3.86968 0.969406C4.01033 0.828753 4.20109 0.749736 4.40001 0.749736C4.59892 0.749736 4.78968 0.828753 4.93034 0.969406C5.07099 1.11006 5.15001 1.30082 5.15001 1.49974L5.15001 12.7497L7.40001 12.7497C7.54834 12.7498 7.69334 12.7938 7.81665 12.8762C7.93997 12.9587 8.03608 13.0758 8.09282 13.2129ZM16.9306 3.96911L13.9306 0.969111C13.861 0.899378 13.7783 0.844059 13.6872 0.806316C13.5962 0.768573 13.4986 0.749146 13.4 0.749146C13.3014 0.749146 13.2038 0.768573 13.1128 0.806316C13.0218 0.844059 12.939 0.899378 12.8694 0.969111L9.86938 3.96911C9.76437 4.074 9.69285 4.20769 9.66386 4.35326C9.63487 4.49882 9.64972 4.64971 9.70654 4.78683C9.76335 4.92395 9.85957 5.04112 9.98302 5.12353C10.1065 5.20593 10.2516 5.24985 10.4 5.24974H12.65L12.65 16.4997C12.65 16.6986 12.729 16.8894 12.8697 17.0301C13.0103 17.1707 13.2011 17.2497 13.4 17.2497C13.5989 17.2497 13.7897 17.1707 13.9303 17.0301C14.071 16.8894 14.15 16.6986 14.15 16.4997L14.15 5.24974L16.4 5.24974C16.5484 5.24985 16.6935 5.20593 16.817 5.12353C16.9404 5.04112 17.0367 4.92395 17.0935 4.78683C17.1503 4.64971 17.1651 4.49882 17.1362 4.35326C17.1072 4.20769 17.0356 4.074 16.9306 3.96911Z" fill="#B3B3B3"/>
                </svg>
              </span>
              <span className="text">
                 Transactions
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.820258 8.83168C1.04173 6.97455 1.80133 5.22269 3.00557 3.79168C3.13882 3.631 3.30413 3.4999 3.49094 3.40677C3.67775 3.31364 3.88194 3.26052 4.09045 3.25081C4.29896 3.24111 4.5072 3.27503 4.70186 3.3504C4.89651 3.42578 5.07329 3.54095 5.22088 3.68855L7.81494 6.33793C8.06477 6.58718 8.21786 6.91712 8.24689 7.26882C8.27591 7.62053 8.17897 7.9711 7.97338 8.25793C7.81765 8.47885 7.70038 8.72449 7.62651 8.98449C7.60304 9.0612 7.5556 9.12837 7.49114 9.17612C7.42668 9.22388 7.3486 9.2497 7.26838 9.2498L1.19338 9.2498C1.14045 9.24989 1.08809 9.23877 1.03976 9.21717C0.991431 9.19557 0.948222 9.16398 0.912976 9.12448C0.87773 9.08499 0.851246 9.03848 0.835265 8.98801C0.819284 8.93754 0.81417 8.88426 0.820258 8.83168ZM11.3803 0.255427C11.1731 0.23736 10.9644 0.262573 10.7675 0.329466C10.5706 0.39636 10.3897 0.503471 10.2364 0.643998C10.0831 0.784526 9.96066 0.955398 9.87692 1.14576C9.79318 1.33613 9.74994 1.54183 9.74994 1.7498V5.56261C9.74735 5.91641 9.871 6.25953 10.0987 6.53034C10.3264 6.80115 10.6432 6.9819 10.9921 7.04011C11.6493 7.14853 12.2516 7.47252 12.7043 7.96105C13.157 8.44957 13.4342 9.07484 13.4924 9.73832C13.5505 10.4018 13.3862 11.0657 13.0253 11.6255C12.6645 12.1853 12.1276 12.6091 11.4993 12.8301C11.4262 12.857 11.3631 12.9056 11.3185 12.9695C11.2739 13.0334 11.25 13.1094 11.2499 13.1873L11.2499 19.3026C11.2496 19.3557 11.2605 19.4083 11.282 19.4568C11.3035 19.5054 11.335 19.5488 11.3746 19.5843C11.4141 19.6197 11.4607 19.6464 11.5113 19.6625C11.5619 19.6786 11.6153 19.6837 11.6681 19.6776C14.0079 19.3887 16.1647 18.2645 17.7416 16.5118C19.3184 14.7591 20.2092 12.4958 20.2499 10.1386C20.3203 5.04886 16.424 0.707302 11.3803 0.255427ZM9.49213 12.8273C9.0729 12.6778 8.6922 12.4368 8.37763 12.1219C8.06305 11.807 7.82249 11.4261 7.67338 11.0067C7.64782 10.9323 7.59984 10.8677 7.53604 10.8217C7.47225 10.7757 7.39578 10.7506 7.31713 10.7498L1.19244 10.7498C1.13944 10.7495 1.08696 10.7604 1.03848 10.7818C0.989998 10.8032 0.946608 10.8347 0.911172 10.8741C0.875737 10.9135 0.849062 10.96 0.832906 11.0105C0.81675 11.061 0.811481 11.1143 0.817445 11.167C1.08005 13.3339 2.06153 15.3503 3.60502 16.8938C5.1485 18.4373 7.16486 19.4188 9.33182 19.6814C9.38449 19.6873 9.43783 19.6821 9.48831 19.6659C9.5388 19.6497 9.58528 19.6231 9.6247 19.5876C9.66412 19.5522 9.69559 19.5088 9.71701 19.4603C9.73844 19.4118 9.74934 19.3594 9.74901 19.3064L9.74901 13.1873C9.74916 13.108 9.72446 13.0306 9.67839 12.966C9.63232 12.9015 9.56719 12.853 9.49213 12.8273Z" fill="#B3B3B3"/>
                </svg>
              </span>
              <span className="text">
                 Budgets
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3501 3.57569V1.99976C14.3501 1.60193 14.1921 1.2204 13.9108 0.939096C13.6295 0.657791 13.2479 0.499756 12.8501 0.499756L5.3501 0.499756C4.95227 0.499756 4.57074 0.657791 4.28944 0.939096C4.00813 1.2204 3.8501 1.60193 3.8501 1.99976V3.57569C3.00364 3.74938 2.24299 4.2097 1.69647 4.87901C1.14995 5.54833 0.851018 6.38566 0.850098 7.24976L0.850098 17.7498C0.850098 18.7443 1.24519 19.6981 1.94845 20.4014C2.65171 21.1047 3.60554 21.4998 4.6001 21.4998L13.6001 21.4998C14.5947 21.4998 15.5485 21.1047 16.2517 20.4014C16.955 19.6981 17.3501 18.7443 17.3501 17.7498L17.3501 7.24976C17.3492 6.38566 17.0502 5.54833 16.5037 4.87901C15.9572 4.2097 15.1966 3.74938 14.3501 3.57569ZM8.3501 1.99976L9.8501 1.99976V3.49976H8.3501V1.99976ZM5.3501 1.99976L6.8501 1.99976L6.8501 3.49976H5.3501L5.3501 1.99976ZM9.8501 16.2498V16.9998C9.8501 17.1987 9.77108 17.3894 9.63043 17.5301C9.48978 17.6707 9.29901 17.7498 9.1001 17.7498C8.90119 17.7498 8.71042 17.6707 8.56977 17.5301C8.42912 17.3894 8.3501 17.1987 8.3501 16.9998V16.2498H7.6001C7.40119 16.2498 7.21042 16.1707 7.06977 16.0301C6.92912 15.8894 6.8501 15.6987 6.8501 15.4998C6.8501 15.3008 6.92912 15.1101 7.06977 14.9694C7.21042 14.8288 7.40119 14.7498 7.6001 14.7498H9.8501C10.049 14.7498 10.2398 14.6707 10.3804 14.5301C10.5211 14.3894 10.6001 14.1987 10.6001 13.9998C10.6001 13.8008 10.5211 13.6101 10.3804 13.4694C10.2398 13.3288 10.049 13.2498 9.8501 13.2498H8.3501C7.75336 13.2498 7.18106 13.0127 6.75911 12.5907C6.33715 12.1688 6.1001 11.5965 6.1001 10.9998C6.1001 10.403 6.33715 9.83072 6.75911 9.40877C7.18106 8.98681 7.75336 8.74976 8.3501 8.74976V7.99976C8.3501 7.80084 8.42912 7.61008 8.56977 7.46943C8.71042 7.32877 8.90119 7.24976 9.1001 7.24976C9.29901 7.24976 9.48978 7.32877 9.63043 7.46943C9.77108 7.61008 9.8501 7.80084 9.8501 7.99976V8.74976H10.6001C10.799 8.74976 10.9898 8.82877 11.1304 8.96943C11.2711 9.11008 11.3501 9.30084 11.3501 9.49976C11.3501 9.69867 11.2711 9.88943 11.1304 10.0301C10.9898 10.1707 10.799 10.2498 10.6001 10.2498H8.3501C8.15119 10.2498 7.96042 10.3288 7.81977 10.4694C7.67912 10.6101 7.6001 10.8008 7.6001 10.9998C7.6001 11.1987 7.67912 11.3894 7.81977 11.5301C7.96042 11.6707 8.15119 11.7498 8.3501 11.7498H9.8501C10.4468 11.7498 11.0191 11.9868 11.4411 12.4088C11.863 12.8307 12.1001 13.403 12.1001 13.9998C12.1001 14.5965 11.863 15.1688 11.4411 15.5907C11.0191 16.0127 10.4468 16.2498 9.8501 16.2498ZM12.8501 3.49976H11.3501V1.99976L12.8501 1.99976V3.49976Z" fill="#B3B3B3"/>
                </svg>
              </span>
              <span className="text">
                 Pots
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.95 0.749756L2.44995 0.749756C2.05213 0.749756 1.6706 0.907791 1.38929 1.1891C1.10799 1.4704 0.949951 1.85193 0.949951 2.24976L0.949951 16.4998C0.950019 16.6276 0.982759 16.7533 1.04506 16.8649C1.10736 16.9765 1.19716 17.0704 1.30593 17.1375C1.41469 17.2047 1.53882 17.2429 1.66652 17.2486C1.79422 17.2543 1.92126 17.2273 2.03558 17.1701L4.69995 15.8379L7.36433 17.1701C7.46852 17.2222 7.58344 17.2494 7.69995 17.2494C7.81647 17.2494 7.93138 17.2222 8.03558 17.1701L10.7 15.8379L13.3643 17.1701C13.4685 17.2222 13.5834 17.2494 13.7 17.2494C13.8165 17.2494 13.9314 17.2222 14.0356 17.1701L16.7 15.8379L19.3643 17.1701C19.4786 17.2273 19.6057 17.2543 19.7334 17.2486C19.8611 17.2429 19.9852 17.2047 20.094 17.1375C20.2027 17.0704 20.2925 16.9765 20.3548 16.8649C20.4171 16.7533 20.4499 16.6276 20.45 16.4998L20.45 2.24976C20.45 1.85193 20.2919 1.4704 20.0106 1.1891C19.7293 0.907791 19.3478 0.749756 18.95 0.749756ZM15.2 10.4998L6.19995 10.4998C6.00104 10.4998 5.81027 10.4207 5.66962 10.2801C5.52897 10.1394 5.44995 9.94867 5.44995 9.74976C5.44995 9.55084 5.52897 9.36008 5.66962 9.21943C5.81027 9.07877 6.00104 8.99976 6.19995 8.99976L15.2 8.99976C15.3989 8.99976 15.5896 9.07877 15.7303 9.21943C15.8709 9.36008 15.95 9.55084 15.95 9.74976C15.95 9.94867 15.8709 10.1394 15.7303 10.2801C15.5896 10.4207 15.3989 10.4998 15.2 10.4998ZM15.2 7.49976L6.19995 7.49976C6.00104 7.49976 5.81027 7.42074 5.66962 7.28009C5.52897 7.13943 5.44995 6.94867 5.44995 6.74976C5.44995 6.55084 5.52897 6.36008 5.66962 6.21943C5.81027 6.07877 6.00104 5.99976 6.19995 5.99976L15.2 5.99976C15.3989 5.99976 15.5896 6.07877 15.7303 6.21943C15.8709 6.36008 15.95 6.55084 15.95 6.74976C15.95 6.94867 15.8709 7.13943 15.7303 7.28009C15.5896 7.42074 15.3989 7.49976 15.2 7.49976Z" fill="#B3B3B3"/>
                </svg>
              </span>
              <span className="text">
                 Recurring Bills
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-header__hamburger">
          <button className="btn">
              <span className="icon">
                <Image src={Minimizemenu} alt="Minimize Menu" />
              </span>
              <span className="text">
                Minimize menu
              </span>
          </button>
      </div>
   </header>
  )
}

export default Header