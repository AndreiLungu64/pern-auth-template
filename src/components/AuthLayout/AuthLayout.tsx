import styles from "./AuthLayout.module.css";

export function AuthLayout({ children, leftRatio = 2, rightRatio = 3, }: { children: React.ReactNode, leftRatio?: number, rightRatio?: number }) {

    return <div className={`${styles.container}`}>
        <div className={`${styles.leftPanel}`} style={{ '--left-ratio': leftRatio } as React.CSSProperties}>
            <div className={styles.logoContainer}>
                <div className={styles.logoInitial}>N</div>
                <p className={styles.companyName}>Nucleus Auth</p>
            </div>
            <div>
                <h1>The foundation for your next interface.</h1>
                <p>A modular, token-based authentication template built with clean standards and professional accessibility in mind.</p>
            </div>
        </div>
        <div className={`${styles.rightPanel}`} style={{ '--right-ratio': rightRatio } as React.CSSProperties}>
            <div className={styles.formContainer}>{children}</div>
        </div>
    </div>
}