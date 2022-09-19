import "../index.scss";
import GeneralInfo from "./GeneralInfo.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import CV from "./CV.js";
import { useState } from "react";
import JsPDF from "jspdf";

const App = () => {
    //General Info states

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [description, setDescription] = useState();
    const [photo, setPhoto] = useState();

    //Education Info states

    const [university, setUniversity] = useState();
    const [subject, setSubject] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    //Experience Info states

    const [company, setCompany] = useState();
    const [position, setPosition] = useState();
    const [details, setDetails] = useState();
    const [workFrom, setWorkFrom] = useState();
    const [workTo, setWorkTo] = useState();

    const generatePDF = () => {
        const cv = document.querySelector(".CV");
        const report = new JsPDF("portrait", "pt", "a4");

        report
            .html(cv)
            .then(() => {
                report.save("report.pdf");
            })
            .catch((err) => {
                throw Error(err);
            });
    };

    return (
        <div className="App">
            <header>CV Creator</header>
            <GeneralInfo
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
                setDescription={setDescription}
                setPhoto={setPhoto}
            />
            <Education
                setUniversity={setUniversity}
                setSubject={setSubject}
                setFrom={setFrom}
                setTo={setTo}
            />
            <Experience
                setCompany={setCompany}
                setPosition={setPosition}
                setDetails={setDetails}
                setWorkFrom={setWorkFrom}
                setWorkTo={setWorkTo}
            />
            <CV
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                description={description}
                photo={photo}
                university={university}
                subject={subject}
                from={from}
                to={to}
                company={company}
                position={position}
                details={details}
                workFrom={workFrom}
                workTo={workTo}
            />
            <button className="download" onClick={() => generatePDF()}>
                Download PDF
            </button>
        </div>
    );
};

export default App;
