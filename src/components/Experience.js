const Experience = () => {
    return (
        <div className="input-container">
            <h2>Experience</h2>
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Position" />
            <textarea defaultValue="Description of your experience in company"></textarea>
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
        </div>
    );
};

export default Experience;
