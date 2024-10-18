const ContentboxGrid = ({className, children, ...props}) => {
    return (
        <div className={`content-box--grid ${className ? className : ''}`} {...props}>
            {children}
        </div>
    );
};

export default ContentboxGrid;