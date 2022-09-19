const CV = ({ firstName, lastName, email, phone }) => {
    return (
        <div className="CV">
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{email}</div>
            <div>{phone}</div>
        </div>
    );
};

export default CV;
