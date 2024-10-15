const Contentbox = ({className, children}) => {
    return (
        <div className={`content-box ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default Contentbox;