import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FirstPage from "./Pages/FirstPage";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Skill from "./Pages/Skill";
import ContactForm from "./Pages/ContactForm";
import { useState } from "react";
import Loader from "./Pages/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <>
          <FirstPage />
          <AboutMe />
          <Projects />
          <Skill />
          <ContactForm />
        </>
      )}
    </div>
  );
}

export default App;
