
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-6/12 my-8">
            <p className="text-[#FF9466] font-bold mb-2">---{subHeading}---</p>
            <h3 className="sm:text-2xl font-semibold md:text-3xl uppercase border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;