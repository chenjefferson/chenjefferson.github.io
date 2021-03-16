import React from 'react';
import Socials from '../layout/Socials';

function Introduction() {
  return (
    <section>
      <h1>Jefferson William Chen</h1>
      <ul>
        <li>Startup Founder</li>
        <li>Software Engineer</li>
        <li>Entrepreneur</li>
      </ul>
      <p>
        I work on products customers love, invest in startups, and tinker with
        robots and planes in my free time. You'll get both and more on my main
        site (if and when I get around to it), which is a mishmash of a little
        bit of everything that I do.
        <br />I keep a pretty low profile on social media. I think low-bandwidth
        communication with key people I value is a good thing.
        <br />
        Oh-- and if you've read this far, if you inspect element you'll probably
        find an e-mail address that I'm more responsive to. If you want to get a
        better idea of who I am, have a pitch, or like to build things, I'd like
        to hear from you.
      </p>
      <Socials />
    </section>
  );
}

export default Introduction;
