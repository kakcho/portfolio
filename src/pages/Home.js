import Header from "../components/header/Header";

const Home = () => {
    return ( 
        <>
        <Header/>
          
        <main className="section">
          <div className="container">
  
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Мои навыки во frontend</h2>
                <p>JavaScript, React Native, ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, StyledComponents, Node js</p>
              </li>
            </ul>
  
          </div>
        </main> 
        </>);
}
 
export default Home;