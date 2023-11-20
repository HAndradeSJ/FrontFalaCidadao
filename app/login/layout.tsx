import { GoogleOAuthProvider } from "@react-oauth/google";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
     {children}
    </div>
  );
}
