import styles from "./AuthLayout.module.css";

export function AuthLayout({ leftRatio = 2, rightRatio = 3 }: { leftRatio?: number, rightRatio?: number }) {

    return <div className={`${styles.container}`}>
        <div className={`${styles.leftPanel}`} style={{ '--left-ratio': leftRatio } as React.CSSProperties}>
            <div>Logo + Title</div>
            <div><h1>Title</h1> <p>Text</p></div>
        </div>
        <div className={`${styles.rightPanel}`} style={{ '--right-ratio': rightRatio } as React.CSSProperties}></div>
    </div>
}