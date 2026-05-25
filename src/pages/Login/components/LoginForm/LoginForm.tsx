import { AuthInput } from "../../../../components/AuthInput/AuthInput"
import type { LoginFormState } from "../../Login"
import styles from "./LoginForm.module.css"
import { Link } from 'react-router-dom';

export function LoginForm({ form, onChange }: { form: LoginFormState, onChange: (field: keyof LoginFormState, value: string) => void }) {
    return <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <p className={styles.subtitle}> Enter your credentials to access the dashboard</p>
        <div>
            <AuthInput value={form.email} onChange={onChange} id="email" label="Email" placeholder="name@example.com" />
            <AuthInput value={form.password} onChange={onChange} id="password" label="Password" placeholder="" />
            <button>Register</button>
        </div>
        <p className={styles.askMessage}>Don't have an account? <Link className={styles.linkToRegister} to="/register">Sign In</Link></p>
    </div>
}