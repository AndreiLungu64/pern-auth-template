import { useState } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { LoginForm } from "./components/LoginForm/LoginForm";

export type LoginFormState = {
    email: string;
    password: string;
}


export function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const onChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    return <AuthLayout>
        <LoginForm form={form} onChange={onChange} />
    </AuthLayout>
}