const ContentboxGrid = ({className, children}) => {
    return (
        <div className={`content-box--grid ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default ContentboxGrid;