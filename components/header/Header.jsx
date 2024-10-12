//Styling
import header from "./header.module.css"

import Image from "next/image" 
import Link from "next/link"
//Icons
import LogoLarge from "@/public/images/logo-large.svg"
import LogoSmall from "@/public/images/logo-small.svg"
import Overview from "@/public/images/icon-nav-overview.svg"
import Transactions from "@/public/images/icon-nav-transactions.svg"
import Budgets from "@/public/images/icon-nav-budgets.svg"
import Pots from "@/public/images/icon-nav-pots.svg"
import Recurringbills from "@/public/images/icon-nav-recurring-bills.svg"
import Minimizemenu from "@/public/images/icon-minimize-menu.svg"


 const Header = () => {
  return (
   <header className={`main-header bg-dark-100 ${header.mainheader}`} id="main-header">
      <div className="main-header__logo">
        <Image className={header.logolarge} src={LogoLarge} alt="Finance large logo" loading="eager" />
        <Image className={header.logosmall} src={LogoSmall} alt="Finance small logo" loading="eager" />
      </div>
      <nav className="main-header__nav">
        <ul className="main-header__nav-items">
          <li>
            <Link href="/">
              <span className="icon">
                <Image src={Overview} alt="Overview" />
              </span>
              <span className="text">
                 Overview
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <Image src={Transactions} alt="Transactions" />
              </span>
              <span className="text">
                 Transactions
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <Image src={Budgets} alt="Budgets" />
              </span>
              <span className="text">
                 Budgets
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <Image src={Pots} alt="Pots" />
              </span>
              <span className="text">
                 Pots
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="icon">
                <Image src={Recurringbills} alt="Recurring Bills" />
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