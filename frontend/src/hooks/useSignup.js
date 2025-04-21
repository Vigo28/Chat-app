import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useContext(AuthContext); // Pass AuthContext to useContext

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const succes = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!succes) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    username,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            localStorage.setItem('user', JSON.stringify(data));

            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Vul alle velden in');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Wachtwoorden komen niet overeen');
        return false;
    }

    if (password.length < 6) {
        toast.error('Wachtwoord moet minimaal 6 karakters zijn');
        return false;
    }

    return true;
}