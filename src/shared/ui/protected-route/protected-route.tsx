import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const token = useSelector((state: RootState) => state.apiUser);
const navigate = useNavigate();
useEffect(() => {
    if (!token) {
        navigate('/login');
    }
}, [token, navigate]);

return token ? <>{children}</> : null;
}