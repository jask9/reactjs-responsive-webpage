import Header from "./components/UI/Header";
import Introduction from "./components/PageSections/Introduction";
import Highlights from "./components/PageSections/Highlights/Highlights";
import Syllabus from "./components/PageSections/Syllabus/Syllabus";
import ToolsSection from "./components/PageSections/ToolsSection";
import Career from "./components/PageSections/Career";
import Reviews from "./components/PageSections/Reviews/Reviews"
import FeesPayment from "./components/PageSections/FeesPayment/FeesPayment";
import Footer from "./components/UI/Footer"

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Highlights />
      <Syllabus />
      <ToolsSection />
      <Career />
      <Reviews/>
      <FeesPayment/>
      <Footer/>
    </>
  );
}

export default App;
