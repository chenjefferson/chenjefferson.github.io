import React from 'react';

function Introduction() {
  return (
    <main className='intro-page'>
      <section className='intro'>
        <ul className='intro-attributes'>
          <li className='intro-attributes-item'>Startup Founder</li>
          <li className='intro-attributes-item'>Software Engineer</li>
          <li className='intro-attributes-item'>Entrepreneur</li>
        </ul>
        <h1 className='intro-title'>Jefferson William Chen</h1>
        <p className='intro-description'>
          I work on products customers love, invest in startups, and tinker with
          robots and planes in my free time. You'll get the above and more on my
          main site (if and when I get around to it), which is a mishmash of a
          little bit of everything that I do.{' '}
        </p>
        <p className='intro-description'>
          I keep a pretty low profile on social media. I think low-bandwidth
          communication with key people I value is a good thing.
        </p>
        <p className='intro-description'>
          Oh-- and if you've read this far, if you inspect element you'll
          probably find an e-mail address that I'm more responsive to. If you
          want to get a better idea of who I am, have a pitch, or like to build
          things, I'd like to hear from you.
        </p>
        <div className='intro-socials'>
          <ul>
            <li>GitHub</li>
            <li>Email</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Introduction;
