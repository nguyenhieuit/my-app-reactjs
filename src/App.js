import "./App.css";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";

function App(props) {
    return (
        <div className="App">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default App;
