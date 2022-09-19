import "../index.scss";
import GeneralInfo from "./GeneralInfo.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import CV from "./CV.js";
import { useState } from "react";

const App = () => {
    //General Info states

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    //Education Info states

    const [university, setUniversity] = useState();
    const [subject, setSubject] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    //Experience Info states

    const [company, setCompany] = useState();
    const [position, setPosition] = useState();
    const [workFrom, setWorkFrom] = useState();
    const [workTo, setWorkTo] = useState();

    return (
        <div className="App">
            <header>CV Creator</header>
            <GeneralInfo
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
            />
            <Education />
            <Experience />
            <CV
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
            />
        </div>
    );
};

export default App;
