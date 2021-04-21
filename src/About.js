import React from "react"

export default class AboutSection extends React.Component{
    render() {
        return (
            <details id='aboutDetails'onToggle={(e) => {
                if (e.target.attributes.open) {
                    e.target.scrollIntoView();
                } else {
                    document.getElementById('boardDiv').scrollIntoView();
                }
            }}>
                <summary >About This Project</summary>
                <main>
                    <h4>Front-End</h4>
                    <ul>
                        <li>React</li>
                        <li>JSX</li>
                        <li>SASS</li>
                         Node.js, MongoDB, Heroku, and Atlas.
                    </ul>
                    <h4>Back-End/API</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Heroku</li>
                        <li>Atlas</li>
                    </ul>
                         
      
                    <h4>Inspiration</h4>
                    <ul>
                        <li><a href="http://gabrielecirulli.github.io/2048/">2048 by Gabriele Cirulli</a></li>
                        <li>I was sick of all the ads while trying to play 2048</li>
                        <li>I wanted to learn more about creating, hosting, and maintaing my own API's</li>
                    </ul>
                </main>
                </details>
        )
    }
}