import { AuthInput } from "../../../../components/AuthInput/AuthInput"
import type { RegisterFormState } from "../../Register"
import styles from "./RegisterForm.module.css"
import { Link } from 'react-router-dom';




export function RegisterForm({ form, onChange }: { form: RegisterFormState, onChange: (field: keyof RegisterFormState, value: string) => void }) {
    return <div className={styles.container}>
        <h2 className={styles.title}>Create an account</h2>
        <p className={styles.subtitle}> Enter your information to get started</p>
        <div>
            <AuthInput value={form.username} onChange={onChange} id="username" label="Full Name" placeholder="John Doe" />
            <AuthInput value={form.email} onChange={onChange} id="email" label="Email" placeholder="name@example.com" />
            <AuthInput value={form.password} onChange={onChange} id="password" label="Password" placeholder="" />
            <button>Register</button>
        </div>
        <p className={styles.askMessage}>Already have an account?<Link className={styles.linkToRegister} to="/login">Sign In</Link></p>
    </div>
}