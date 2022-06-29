import { useState } from "react";
import { Content } from "../atoms/Content";
import Search from "../molecules/Search";
import Footer from "../organisms/Footer";
import { InfoSection } from "../organisms/InfoSection";
import { LeftSection } from "../organisms/LeftSection";
import ResultsSection from "../organisms/ResultsSection";

const FoxbelApp =  () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="grid">
                <LeftSection show={show} setShow={setShow}/>
                <Content>
                    <Search show={show} setShow={setShow} />
                    <InfoSection/>
                    <ResultsSection/>
                </Content>
            </div>
            <Footer/>
        </>
    )
}

export default FoxbelApp;