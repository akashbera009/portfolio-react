import React, { useState, useRef, useEffect } from 'react';
// import { Draggable } from 'react-draggable';
import './contact.css';
// import SendMailjetEmail from '../../components/SendMailjetEmail/SendMailjetEmail.jsx'  ; 
// api : 21e048498c9e2b32d87ba0ea6dc3a9d0
// secret : 3dc2f5333ee0f8501b1d173b8a3da2c6

const Contact = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef(null);
  // const [shouldSend, setShouldSend] = useState(false);

  useEffect(() => {
    if (step <= 3 && step > 1) {
      inputRef.current?.focus();
    }
  }, [step]);

  const handleRestart = () => {
    setStep(1);
    setEmail('');
    setName('');
    setDescription('');
    setCompleted(false);
  };
  const handleFormSubmit = () => {
    // your existing logic to advance steps…
    // once you're ready to actually send:
    alert(`Hello ${name}, your message has been deliverd to Akash `)
    setShouldSend(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (step === 1) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          setStep(2); // Only go to next step if email is valid
        } else {
          alert('Please enter a valid email address.');
        }
      } else if (step === 2 && name !== '') {
        setStep(3);
      } else if (step === 3 && description !== '') {
        setCompleted(true);
        setStep(4); // Move to a new step to indicate completion
      }
    }
  };
  return (<>
    <h2>Get in Touch</h2>
    <div className='contact-container'>
      <div className='social-contact'>
        <Soclail_Contact_Card />
      </div>
      <div className="terminal-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <h3 className="terminal-title">contact@akash</h3>
          </div>
          <div className="terminal-body">
            <p className="terminal-greeting">Hey there! We're excited to link 🔗</p>

            <p className="terminal-question">
              {step >= 1 ? (
                <>
                  To start, could you give us <span className="terminal-highlight">your email?</span>
                </>
              ) : (
                ''
              )}
              {step === 1 && (
                <div className='next-input'>
                  <span className="terminal-prompt"> &gt;&gt; Enter email:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ color: '#4493f8' }}
                    className="terminal-input"
                  />
                </div>
              )}
              {step > 1 && <p className="terminal-success">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.87"
                  style={{ enableBackground: 'new 0 0 122.88 122.87' }} // Corrected style
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M32.82,51.34l14.99-0.2l1.12,0.29c3.03,1.74,5.88,3.74,8.54,5.99c1.92,1.63,3.76,3.4,5.5,5.32 c5.38-8.65,11.11-16.6,17.16-23.9c6.63-8,13.66-15.27,21.05-21.9l1.46-0.56h16.36l-3.3,3.66c-10.13,11.26-19.33,22.9-27.64,34.9 C79.74,66.97,72.31,79.37,65.7,92.13l-2.06,3.97l-1.89-4.04c-3.49-7.48-7.66-14.35-12.64-20.49c-4.98-6.14-10.77-11.59-17.52-16.22 L32.82,51.34L32.82,51.34L32.82,51.34z"
                    />
                    <path
                      className="st1"
                      d="M61.44,0c9.53,0,18.55,2.17,26.61,6.04c-3.3,2.61-6.36,5.11-9.21,7.53c-5.43-1.97-11.28-3.05-17.39-3.05 c-14.06,0-26.79,5.7-36,14.92c-9.21,9.22-14.92,21.94-14.92,36c0,14.06,5.7,26.78,14.92,36s21.94,14.92,36,14.92 c14.06,0,26.79-5.7,36-14.92c9.22-9.22,14.91-21.94,14.91-36c0-3.34-0.32-6.62-0.94-9.78c2.64-3.44,5.35-6.88,8.11-10.28 c2.17,6.28,3.35,13.04,3.35,20.06c0,16.96-6.88,32.33-17.99,43.44c-11.12,11.12-26.48,18-43.44,18c-16.96,0-32.32-6.88-43.44-18 C6.88,93.76,0,78.4,0,61.44C0,44.47,6.88,29.11,17.99,18C29.11,6.88,44.47,0,61.44,0L61.44,0L61.44,0z"
                    />
                  </g>
                </svg>
                {email}</p>}
            </p>

            <p className="terminal-question">
              {step >= 2 ?
                (
                  <>
                    Awesome! And what's <span className="terminal-highlight">your name?</span>
                  </>
                ) : (
                  ''
                )}
              {step === 2 && (
                <div className='next-input'>
                  <span className="terminal-prompt"> &gt;&gt; Enter name:</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ color: '#4493f8' }}
                    className="terminal-input"
                  />
                </div>
              )}
              {step > 2 && <p className="terminal-success">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.87"
                  style={{ enableBackground: 'new 0 0 122.88 122.87' }} // Corrected style
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M32.82,51.34l14.99-0.2l1.12,0.29c3.03,1.74,5.88,3.74,8.54,5.99c1.92,1.63,3.76,3.4,5.5,5.32 c5.38-8.65,11.11-16.6,17.16-23.9c6.63-8,13.66-15.27,21.05-21.9l1.46-0.56h16.36l-3.3,3.66c-10.13,11.26-19.33,22.9-27.64,34.9 C79.74,66.97,72.31,79.37,65.7,92.13l-2.06,3.97l-1.89-4.04c-3.49-7.48-7.66-14.35-12.64-20.49c-4.98-6.14-10.77-11.59-17.52-16.22 L32.82,51.34L32.82,51.34L32.82,51.34z"
                    />
                    <path
                      className="st1"
                      d="M61.44,0c9.53,0,18.55,2.17,26.61,6.04c-3.3,2.61-6.36,5.11-9.21,7.53c-5.43-1.97-11.28-3.05-17.39-3.05 c-14.06,0-26.79,5.7-36,14.92c-9.21,9.22-14.92,21.94-14.92,36c0,14.06,5.7,26.78,14.92,36s21.94,14.92,36,14.92 c14.06,0,26.79-5.7,36-14.92c9.22-9.22,14.91-21.94,14.91-36c0-3.34-0.32-6.62-0.94-9.78c2.64-3.44,5.35-6.88,8.11-10.28 c2.17,6.28,3.35,13.04,3.35,20.06c0,16.96-6.88,32.33-17.99,43.44c-11.12,11.12-26.48,18-43.44,18c-16.96,0-32.32-6.88-43.44-18 C6.88,93.76,0,78.4,0,61.44C0,44.47,6.88,29.11,17.99,18C29.11,6.88,44.47,0,61.44,0L61.44,0L61.44,0z"
                    />
                  </g>
                </svg>
                {name}</p>}
            </p>

            <p className="terminal-question">
              {step >= 3 ?
                (
                  <>
                    Perfect,<span className="terminal-highlight"> and how can we help you?</span>
                  </>
                ) : (
                  ''
                )}
              {step === 3 && (
                <div className='next-input'>
                  <span className="terminal-prompt"> &gt;&gt; Enter description:</span>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ color: '#4493f8' }}
                    className="terminal-input"
                  />
                </div>
              )}
              {step > 3 && <p className="terminal-success">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.87"
                  style={{ enableBackground: 'new 0 0 122.88 122.87' }} // Corrected style
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M32.82,51.34l14.99-0.2l1.12,0.29c3.03,1.74,5.88,3.74,8.54,5.99c1.92,1.63,3.76,3.4,5.5,5.32 c5.38-8.65,11.11-16.6,17.16-23.9c6.63-8,13.66-15.27,21.05-21.9l1.46-0.56h16.36l-3.3,3.66c-10.13,11.26-19.33,22.9-27.64,34.9 C79.74,66.97,72.31,79.37,65.7,92.13l-2.06,3.97l-1.89-4.04c-3.49-7.48-7.66-14.35-12.64-20.49c-4.98-6.14-10.77-11.59-17.52-16.22 L32.82,51.34L32.82,51.34L32.82,51.34z"
                    />
                    <path
                      className="st1"
                      d="M61.44,0c9.53,0,18.55,2.17,26.61,6.04c-3.3,2.61-6.36,5.11-9.21,7.53c-5.43-1.97-11.28-3.05-17.39-3.05 c-14.06,0-26.79,5.7-36,14.92c-9.21,9.22-14.92,21.94-14.92,36c0,14.06,5.7,26.78,14.92,36s21.94,14.92,36,14.92 c14.06,0,26.79-5.7,36-14.92c9.22-9.22,14.91-21.94,14.91-36c0-3.34-0.32-6.62-0.94-9.78c2.64-3.44,5.35-6.88,8.11-10.28 c2.17,6.28,3.35,13.04,3.35,20.06c0,16.96-6.88,32.33-17.99,43.44c-11.12,11.12-26.48,18-43.44,18c-16.96,0-32.32-6.88-43.44-18 C6.88,93.76,0,78.4,0,61.44C0,44.47,6.88,29.11,17.99,18C29.11,6.88,44.47,0,61.44,0L61.44,0L61.44,0z"
                    />
                  </g>
                </svg>
                {description}</p>}
            </p>

            {completed && (
              <>
                <div className="terminal-summary">
                  <p style={{ color: 'white' }}>Beautiful! Here's what we've got:</p>
                  <p className='' style={{ color: 'white' }}> <span className='final-terminal-summery'> email:</span> {email}</p>
                  <p style={{ color: 'white' }}><span className='final-terminal-summery'>name:</span> {name}</p>
                  <p style={{ color: 'white' }}><span className='final-terminal-summery'>description:</span> {description}</p>
                  <p style={{ color: 'white' }}>Look good?</p>
                  <div className="button-duo">
                    <button onClick={handleRestart}>Restart</button>
                    <button onClick={() => handleFormSubmit()}>Send it!</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
export const Soclail_Contact_Card = () => {
  return (
    <section className="container">
      <div className="card-container">
        <div className="card-content">
          <div className="card-title">
            <span className="title">Social</span>
          </div>
          <div className="card-body">
            <div className="svg-card">
              <a href="https://github.com/akashbera009" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                  <path fill="#4493f8" d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg></a>
            </div>
            <div className="svg-card">
              <a href="mailto:akashbera102003@gmail.com" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#4493f8" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg></a>
            </div>
            <div className="svg-card">
              <a href="https://leetcode.com/u/AKASH_BERA/" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4493f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 13h7.5" /><path d="M9.424 7.268l4.999 -4.999" /><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" /></svg></a>
            </div>
            <div className="svg-card">
              <a href="https://www.geeksforgeeks.org/user/akashbers59y/" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4493f8" d="M21.45 14.315c-.143.28-.334.532-.565.745a3.7 3.7 0 0 1-1.104.695a4.5 4.5 0 0 1-3.116-.016a3.8 3.8 0 0 1-2.135-2.078a4 4 0 0 1-.13-.353h7.418a4.3 4.3 0 0 1-.368 1.008zm-11.99-.654a3.8 3.8 0 0 1-2.134 2.078a4.5 4.5 0 0 1-3.117.016a3.7 3.7 0 0 1-1.104-.695a2.7 2.7 0 0 1-.564-.745a4.2 4.2 0 0 1-.368-1.006H9.59q-.056.18-.13.352m14.501-1.758a4 4 0 0 0-.082-.475l-9.634-.008a3.93 3.93 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357a6.3 6.3 0 0 0-2.544-.49a6.4 6.4 0 0 0-2.405.457a6 6 0 0 0-1.963 1.276a6.1 6.1 0 0 0-1.325 1.94a5.9 5.9 0 0 0-.466 1.864h-.063a5.9 5.9 0 0 0-.467-1.865a6.1 6.1 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.7 6.7 0 0 0-4.949.031A5.7 5.7 0 0 0 1.34 7.73l1.52 1.49a4.17 4.17 0 0 1 4.484-.958c.47.184.898.46 1.26.81c.368.36.66.792.859 1.268c.146.344.242.708.285 1.08l-9.635.008A4.7 4.7 0 0 0 0 12.457a6.5 6.5 0 0 0 .345 2.127a4.9 4.9 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.5 6.5 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a6 6 0 0 0 1.964-1.277a6.1 6.1 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077a6 6 0 0 0 1.964 1.276a6.4 6.4 0 0 0 2.405.457a6.5 6.5 0 0 0 2.502-.457a5.4 5.4 0 0 0 1.882-1.293a4.9 4.9 0 0 0 1.08-1.783A6.5 6.5 0 0 0 24 12.457a5 5 0 0 0-.039-.554" /></svg></a>
            </div>
          </div>
          <div className="card-footer">
            <span className="title">Doors open, inbox ready <br />— let’s talk</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;

