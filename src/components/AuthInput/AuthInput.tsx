import styles from "./AuthInput.module.css";

export function AuthInput({ value, onChange, id, label, placeholder }: { value: string, onChange: (field: string, value: string) => void, id: string, label: string, placeholder: string }) {
    return <div className={styles.container}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input className={styles.input} id={id} type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(id, e.target.value)} />
    </div>
}