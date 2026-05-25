import { useState } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";

export type RegisterFormState = {
    username: string;
    email: string;
    password: string;
}

export function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const onChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    return <AuthLayout>
        <RegisterForm form={form} onChange={onChange} />
    </AuthLayout>
}