import Header from "./Header";
import Footer from "./Footer";
import tw from "twin.macro";

const Main = tw.main`
    xl:pt-8
    pt-40
    h-auto
    container
    block
`
function Layout(props){
    return (
        <div>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </div>
    )
}
export default Layout