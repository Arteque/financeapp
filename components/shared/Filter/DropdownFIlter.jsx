
'use client'

import { useState} from "react"


const DropdownFIlter = ({dropdownOptions, label, defaultText, icon, handleChange, ...props}) => {


    const [ dropdown, setDropdown ] = useState(false)
    const [dropdownSelectedValue, setDropdownSelectedValue] = useState(defaultText)

    const handleDropdown = (e) => {
        e.preventDefault()
        setDropdown( prev => !prev )
    }

    const handleDropdownItemClick = (e) => {
        e.preventDefault()
        setDropdownSelectedValue(e.target.innerText.trim())
        setDropdown( prev => !prev )
    }

    return (
        <>
        
        {/* Sort by filter */}
        <div className={`filter__dropdown ${dropdown ? 'open' : ''}`}  >
                <div className="filter__dropdown items" onClick={handleChange}>
                    <button className={`items__header ${dropdown ? 'open' : ''}`} onClick={handleDropdown} datavalue={label}  {...props}>
                    <span className="text">
                        {label}
                    </span>
                    <span className="selectedValue">
                        {dropdownSelectedValue}
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3538 0.85375L6.35378 5.85375C6.30734 5.90024 6.2522 5.93712 6.1915 5.96228C6.1308 5.98744 6.06574 6.00039 6.00003 6.00039C5.93432 6.00039 5.86926 5.98744 5.80856 5.96228C5.74786 5.93712 5.69271 5.90024 5.64628 5.85375L0.646278 0.85375C0.576272 0.783823 0.528588 0.694696 0.509263 0.597654C0.489938 0.500611 0.49984 0.400016 0.537716 0.308605C0.575593 0.217193 0.63974 0.139075 0.722036 0.08414C0.804333 0.0292046 0.90108 -7.77138e-05 1.00003 1.549e-07L11 1.549e-07C11.099 -7.77138e-05 11.1957 0.0292046 11.278 0.08414C11.3603 0.139075 11.4245 0.217193 11.4623 0.308605C11.5002 0.400016 11.5101 0.500611 11.4908 0.597654C11.4715 0.694696 11.4238 0.783823 11.3538 0.85375Z" fill="#201F24"/>
                        </svg>
                    </span>
                    <span className="icon">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={icon} fill="#201F24"/>
                        </svg>
                    </span>
                    
                    </button>
                    {
                    dropdownOptions  && (
                        <ul className={`items__childs ${dropdown ? 'open' : ''}`}>
                            {
                            dropdownOptions.map((item, index) => (
                                <li className={`${dropdownSelectedValue === item ? 'current' : ''}`} key={index} onClick={handleDropdownItemClick}>
                                    <span className="icon"></span>
                                    <span className="text">{item}</span>
                                </li>
                            ))
                            }
                        </ul>
                    )
                    }
                </div>
            </div>
            {/* Sort by filter */}

        </>
    );
};

export default DropdownFIlter;