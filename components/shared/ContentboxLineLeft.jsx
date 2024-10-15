import Contentbox from "./Contentbox";

const ContentboxLineLeft = ({className, children, style}) => {
    return (
        <Contentbox style={style} className={`content-box--line-left ${className ? className : ''}`} >
            {children}
        </Contentbox>
    );
};

export default ContentboxLineLeft;