const Experience = ({
    setCompany,
    setPosition,
    setDetails,
    setWorkFrom,
    setWorkTo,
}) => {
    return (
        <div className="input-container">
            <h2>Experience</h2>
            <input
                type="text"
                placeholder="Company"
                onChange={(e) => setCompany(e.target.value)}
            />
            <input
                type="text"
                placeholder="Position"
                onChange={(e) => setPosition(e.target.value)}
            />
            <textarea
                defaultValue="Description of your experience in company"
                onChange={(e) => setDetails(e.target.value)}
            ></textarea>
            <input
                type="text"
                placeholder="From"
                onChange={(e) => setWorkFrom(e.target.value)}
            />
            <input
                type="text"
                placeholder="To"
                onChange={(e) => setWorkTo(e.target.value)}
            />
        </div>
    );
};

export default Experience;
