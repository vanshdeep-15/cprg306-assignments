// _utils/protected-route.js

"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './auth-context'; // Correct path for siblings

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/'); 
      }
    }
  }, [user, loading, router]);

  // Show a loading/authenticating message while the check is happening
  if (loading || !user) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', fontSize: '1.2rem' }}>
        Authenticating access...
      </div>
    );
  }

  // If user is logged in, render the protected content
  return <>{children}</>;
}