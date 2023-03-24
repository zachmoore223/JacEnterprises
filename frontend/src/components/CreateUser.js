import { useState, useEffect } from 'react';

export default function CreateUser() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');
  const [users, setUsers] = useState([])
  useEffect(() => {
          const periodicallyFetch = setInterval(
             () => fetch("http://localhost:8080/api/users")
                        .then(res => res.json())
                        .then(response => setUsers(response)),
             1000);
          return () => clearInterval(periodicallyFetch)
      }, [])


  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
    if(text == ""){
    setStatus('typing')
    } else {
    postNewUser(text);
    }
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return     <div>
                   <p>User {text} created.</p>
               </div>
  }

  return (
    <form onSubmit={handleSubmit}>
        <p>
        <input
            disabled={isSending}
            value={text}
            onChange={e => setText(e.target.value)}
        />

        <button
             disabled={isSending}
        >
          Create User
        </button>

        {isSending && <p>Creating user...</p>}

      </p>




    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

function postNewUser (text) {
fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "userName": text })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}
