// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'A scalable Next.js app with shared UI components',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <header className="header">
            <h1>Admin Dashboard</h1>
            <nav>
              <a href="/UserManagement">User Management</a>
              <a href="/ContentModeration">Content Management</a>
              <a href="/engagement">Engagement</a>

            </nav>
          </header>

          <div className="content-wrapper">
            

            <main className="main-content">{children}</main>
          </div>

          <footer className="footer">
            <p>© 2024 Admin Dashboard Assignment. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
