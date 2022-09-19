import "../index.scss";
import GeneralInfo from "./GeneralInfo.js";
import Education from "./Education.js";
import Experience from "./Experience.js";

const App = () => {
    return (
        <div className="App">
            <header>CV Creator</header>
            <GeneralInfo />
            <Education />
            <Experience />
        </div>
    );
};

export default App;
