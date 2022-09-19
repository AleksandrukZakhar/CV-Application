const GeneralInfo = ({ setFirstName, setLastName, setEmail, setPhone }) => {
    return (
        <div className="input-container">
            <h2>General Info</h2>
            <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
            />
        </div>
    );
};

export default GeneralInfo;
