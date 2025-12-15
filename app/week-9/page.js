"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Welcome to Shopping List</h1>
        
        {!user ? (
          <div>
            <p className="text-gray-600 mb-6">Please sign in to access your shopping list</p>
            <button
              onClick={handleSignIn}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Sign In with GitHub
            </button>
          </div>
        ) : (
          <div>
            {/* Display user's information as shown in instructor's code */}
            <p className="text-gray-700 mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <div className="space-y-4">
              <Link 
                href="/week-9/shopping-list"
                className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium w-full"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}