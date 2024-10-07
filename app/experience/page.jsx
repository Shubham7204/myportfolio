import PageContainer from "../components/PageContainer";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";

export default function page() {
  return (
    <PageContainer title="Experience">
      <div className="md:my-12 my-6 pb-1 rounded-lg bg-slate-700 bg-opacity-75">
        <Education />
        <Experience />
        <Interests />
      </div>
    </PageContainer>
  )
}
