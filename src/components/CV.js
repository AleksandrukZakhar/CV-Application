const CV = ({
    firstName,
    lastName,
    email,
    phone,
    description,
    photo,
    university,
    subject,
    from,
    to,
    company,
    position,
    details,
    workFrom,
    workTo,
}) => {
    return (
        <div className="CV">
            <div className="header">
                <p>
                    {firstName} {lastName}
                </p>
            </div>
            <div className="container">
                <div className="personal-info">
                    <div class="center">
                        <img src={photo} alt="personal" />
                    </div>
                    <p>
                        Email: <p className="small">{email}</p>
                    </p>
                    <p>
                        Tel: <p className="small">{phone}</p>
                    </p>
                </div>
                <div className="main">
                    <div>
                        <h2>Description</h2>
                        <p>{description}</p>
                    </div>
                    <hr />
                    <div>
                        <h2>Education</h2>
                        <div>University name: {university}</div>
                        <div>Subject: {subject}</div>
                        <div>Studied from: {from}</div>
                        <div>To: {to}</div>
                    </div>
                    <hr />
                    <div>
                        <h2>Experience</h2>
                        <div>Company name: {company}</div>
                        <div>Position: {position}</div>
                        <div>Work details: {details}</div>
                        <div>Worked from: {workFrom}</div>
                        <div>To: {workTo}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;
