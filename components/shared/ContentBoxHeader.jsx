const ContentBoxHeader = ({children, className, ...props}) => {
    return (
        <div className={`content-box__header ${className ? className : ''}`} {...props}>
            {children}
        </div>
    );
};

export default ContentBoxHeader;