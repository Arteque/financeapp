const Section = ({className, children, id}) => {
    return (
        <>
            
            <section className={`section ${className ? className : ''}`} id={id ? id : ''}> 
                {children}
            </section>
        </>
    );
};

export default Section;