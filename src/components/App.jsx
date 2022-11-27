import React from "react";
import Header from './Header.jsx';
import Footer from './Footer';
import Note from './Note';

function App () {
    return(
        <div>
            <Header />
            <div>
                <Note />
            </div>
            <Footer />
        </div>
    )
}

export default App;
