// app/week-10/layout.js

// ✅ CORRECT PATH (Since _utils is inside week-10):
import { AuthContextProvider } from "./_utils/auth-context";

export default function Week10Layout({ children }) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}