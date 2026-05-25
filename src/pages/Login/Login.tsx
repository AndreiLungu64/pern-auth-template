import { useState } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { LoginForm } from "./components/LoginForm/LoginForm";

export type LoginFormState = {
    username: string;
    email: string;
    password: string;
}

export function Login() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const onChange = (field: keyof LoginFormState, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    return <AuthLayout>
        <LoginForm form={form} onChange={onChange} />
    </AuthLayout>
}