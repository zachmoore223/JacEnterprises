import { useState, useEffect } from 'react';

export default function FeedbackForm() {
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
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return     <div>
                   {users.map(user => (<h1 key={user.user_id}> Welcome {user.userName} to Jac Enterprises</h1>))}
               </div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Here:</h3>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Login
      </button>
      {isSending && <p>Logging in...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}
