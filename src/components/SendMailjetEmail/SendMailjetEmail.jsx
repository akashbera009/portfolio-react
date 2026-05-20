import React, { useEffect, useState } from 'react';

const SendMailjetEmail = ({ name, email, message }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  useEffect(() => {
    if (!name || !email || !message) return;

    const sendEmail = async () => {
      setStatus('sending');
      
      // ⚠️ Never do this in production! Secrets in frontend = wide-open API.
      const apiKey = '21e048498c9e2b32d87ba0ea6dc3a9d0';
      const secret = '3dc2f5333ee0f8501b1d173b8a3da2c6';
      const auth = btoa(`${apiKey}:${secret}`);
      
      const payload = {
        Messages: [
          {
            From: { Email: email,   Name: name },
            To:   [{ Email: email,   Name: name }],
            Subject: `New message from ${name}`,
            TextPart: message,
            HTMLPart: `<p>${message}</p>`
          }
        ]
      };
 console.log("came");
      try { 
        const res = await fetch('https://api.mailjet.com/v3.1/send', {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.ErrorMessage || JSON.stringify(err));
        }
        setStatus('sent');
      } catch (err) {
        console.error('Mailjet error:', err);
        setStatus(`error: ${err.message}`);
      }
    };

    sendEmail();
  }, [name, email, message]);

  return (
    <div>
      {status === 'idle'    && <p>Waiting for data…</p>}
      {status === 'sending' && <p>Sending email…</p>}
      {status === 'sent'    && <p style={{color: 'green'}}>Email sent successfully!</p>}
      {status.startsWith('error') && (
        <p style={{color: 'red'}}>Failed to send: {status.replace('error: ', '')}</p>
      )}
    </div>
  );
};

export default SendMailjetEmail;
