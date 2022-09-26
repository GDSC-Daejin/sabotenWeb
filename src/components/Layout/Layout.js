import Header from "./Header";
import Footer from "./Footer";
import tw from "twin.macro";

const Main = tw.main`
    pt-28
    h-screen
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