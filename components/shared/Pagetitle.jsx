const Pagetitle = ({children, className}) => {
    return (
        <div className={`page-title ${className ? className : ''}`}>
           <h2 className="text__lg">
              {children}
           </h2> 
            
        </div>
    );
};

export default Pagetitle;