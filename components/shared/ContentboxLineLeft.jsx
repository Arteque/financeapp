import Contentbox from "./Contentbox";

const ContentboxLineLeft = ({className, children}) => {
    return (
        <Contentbox className={`content-box--line-left ${className ? className : ''}`}>
            {children}
        </Contentbox>
    );
};

export default ContentboxLineLeft;