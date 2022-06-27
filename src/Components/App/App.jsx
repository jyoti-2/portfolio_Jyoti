import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./../Home/Home";
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import Skills from "./../Skills/Skills";
import Contact from "./../Contact/Contact";
import './App.css';
import NavBar from './../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

class App extends React.Component {
    
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <NavBar/>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/contact" component={Contact} />
                        <GoHome/>
                    </div>
                </HashRouter>
                

            </div>
        );
    };

};

export default App;

