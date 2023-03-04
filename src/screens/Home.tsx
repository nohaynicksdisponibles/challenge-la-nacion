import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import HeaderForGrid from "../components/HeaderForGrid";
import HeaderMobile from "../components/HeaderMobile";
import SideBar from "../components/SideBar";
import StateWrapper from "../components/StateWrapper";
import useFoodData from "../hooks/useFoodData";

export default function Home(){
    const {data, ...foodQuery} = useFoodData()

    return(
        <div>
            <Header/>
            <HeaderMobile/>
            <StateWrapper {...foodQuery}>
                <SideBar>
                    <HeaderForGrid tagsData={data}/>
                    <Grid gridData={data}/>
                </SideBar>
            </StateWrapper>
            <Footer/>
        </div>
    )
}