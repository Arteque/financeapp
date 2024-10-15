import Link from "next/link";

const SectionHeader = ({titleClassName, titleText, linkUrl, linkText}) => {
    return (
        <div className="content-box__header">
            <h3 className={`content-box__title ${titleClassName ? titleClassName : ''}`}>
                {titleText}
            </h3>
            <Link href={linkUrl ? linkUrl : "#"}>
                <span className="text text__sm">
                    {linkText ? linkText : 'See Details'}
                </span>
                <span className="icon">
                    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.765312 0.984686L4.51531 4.73469C4.55018 4.76951 4.57784 4.81087 4.59671 4.8564C4.61558 4.90192 4.62529 4.95072 4.62529 5C4.62529 5.04928 4.61558 5.09808 4.59671 5.1436C4.57784 5.18913 4.55018 5.23048 4.51531 5.26531L0.765313 9.01531C0.712867 9.06782 0.646022 9.10358 0.57324 9.11807C0.500458 9.13257 0.425012 9.12514 0.356454 9.09673C0.287895 9.06833 0.229307 9.02022 0.188105 8.95849C0.146903 8.89677 0.124942 8.82421 0.125 8.75L0.125 1.25C0.124941 1.17579 0.146903 1.10323 0.188105 1.04151C0.229306 0.979783 0.287895 0.931674 0.356453 0.903266C0.425012 0.874858 0.500458 0.867432 0.57324 0.881926C0.646022 0.89642 0.712867 0.932182 0.765312 0.984686Z" fill="#696868"/>
                    </svg>
                </span>
            </Link>
        </div>
    );
};

export default SectionHeader;