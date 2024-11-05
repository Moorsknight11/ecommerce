import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (password === 'yourpassword') {
            sessionStorage.setItem('isAdmin', 'true');
            router.push('/admin'); // Redirect to actual dashboard
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}