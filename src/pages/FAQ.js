import React from 'react';
import im1 from '../photos/faq/why-mech-keyboards1.jpeg';
import im2 from '../photos/faq/why-mech-keyboards2.jpeg';
import im3 from '../photos/faq/why-mech-keyboards3.jpg';


function FAQ() {
    return (
        <div>
            <h2 style={{padding:'10px'}}>Why Mechanical Keyboards?</h2>
            <div style={{backgroundColor: 'lightGrey'}} id={"answer-block"}>
                    <h4>A Typing Experience that is tailored towards YOU!</h4>
                        Select your desired size keyboard and switches<br/>
                        Stimulate the two senses of touch and sound<br/>
                        Lube your switches and stabilizers to make them buttery smooth
                    <h4>A Form of Self Expression</h4>
                        Select from an endless combination of colors and styles<br/>
                        Design your own gear through projects and customization<br/>
                        Setup your desktop in a way that highlights your personality
                    <h4>Join a Passionate and Fun Community</h4>
                        Become a part of the (Key)Cult<br/>
                        Join others to share and discuss mechanical keyboards, new releases, fun projects<br/>
                        Come to community meetups & put your keeb on display
            </div>
        </div>
    )
}

export default FAQ;