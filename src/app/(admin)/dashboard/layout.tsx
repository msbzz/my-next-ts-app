import { ReactNode } from 'react';
import './styles.module.css';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <h2>Admin Header</h2>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
