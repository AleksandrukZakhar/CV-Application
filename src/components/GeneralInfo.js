const GeneralInfo = ({
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setDescription,
    setPhoto,
}) => {
    const photoHandler = (file) => {
        const fileReader = new FileReader();

        fileReader.addEventListener("load", () => setPhoto(fileReader.result));

        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

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
            <textarea
                defaultValue="Info about yourself"
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p>Photo:</p>
            <input
                type="file"
                accept="images/*"
                onChange={(e) => photoHandler(e.target.files[0])}
            />
        </div>
    );
};

export default GeneralInfo;
