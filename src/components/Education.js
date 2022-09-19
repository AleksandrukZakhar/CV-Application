const Education = ({ setUniversity, setSubject, setFrom, setTo }) => {
    return (
        <div className="input-container">
            <h2>Education</h2>
            <input
                type="text"
                placeholder="University Name"
                onChange={(e) => setUniversity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
            />
            <input
                type="text"
                placeholder="From"
                onChange={(e) => setFrom(e.target.value)}
            />
            <input
                type="text"
                placeholder="To"
                onChange={(e) => setTo(e.target.value)}
            />
        </div>
    );
};

export default Education;
