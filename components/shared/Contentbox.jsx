const Contentbox = ({className, children, style}) => {
    return (
        <div className={`content-box ${className ? className : ''}`} 
        style={style}>
            {children}
        </div>
    );
};

export default Contentbox;