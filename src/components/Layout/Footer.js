import tw from "twin.macro";

const StyledDiv = tw.div`
    bg-gray-200
    h-48
    text-center
`
const Ul = tw.ul`
    pt-10
    
`

function Footer(){
    return (
        <footer>
            <StyledDiv>
                <Ul>
                    <li>🌵 GDSC 선인장 프로젝트</li>
                    <li>Want . Winnie . Panda . Toby . Harry . Hazel . Peony . Soopeach . Cindy</li>
                </Ul>
            </StyledDiv>
        </footer>
    )
}
export default Footer