import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm.js';
import { useAuth } from '../contexts/auth';
import useResource from "../hooks/useResource"
import Form from '../components/Form';
import Reporttable from '../components/Reporttable';
import {hours} from "../data"

export default function Home() {
  const{user} = useAuth();
  const{resources} = useResource();
  return (
    
    <Layout>
        {user ? (
          <div className="space-y-10">
            <Form />
            <Reporttable reports={resources} hours={hours} />
          </div>
        ) : (
          <LoginForm />
        )}
      </Layout>
  );
}

