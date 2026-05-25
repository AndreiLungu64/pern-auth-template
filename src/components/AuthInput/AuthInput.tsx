import styles from "./AuthInput.module.css";
import type { RegisterFormState } from "../../pages/Register/Register";

export function AuthInput({ value, onChange, id, label, placeholder }: { value: string, onChange: (field: keyof RegisterFormState, value: string) => void, id: keyof RegisterFormState, label: string, placeholder: string }) {
    return <div className={styles.container}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input id={id} type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(id, e.target.value)} />
    </div>
}