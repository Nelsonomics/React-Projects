import React from "react";


function App() {
const Header = (
    <header>
        <h1>welcome to Nelson react pages</h1>
    </header>
)

const Main = (
    <main>
        <h2>WHO IS NELSON</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut minima perferendis optio qui labore fugiat, sit mollitia omnis aut, doloremque eos blanditiis? Totam, fugit vero. Voluptatibus nisi tenetur dignissimos?</p>
    </main>
)

const Footer = (
    <footer>
        copyrght@nelson 2025
    </footer>
)



return (
 <div>
    {Header}
    {Main}
    {Footer}
</div>
);
}

export default App