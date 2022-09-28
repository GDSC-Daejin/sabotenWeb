import Layout from "../components/Layout/Layout";
import MainTop from "../components/Atoms/MainTop";
import MainMiddle from "../components/Atoms/MainMiddle";
import MainBottom from "../components/Atoms/MainBottom";

function MainPage(){
    return (
        <Layout>
            <MainTop/>
            <MainMiddle/>
            <MainBottom/>
        </Layout>
    )
}
export default MainPage