import { useState } from "react";
import  './FormStyle.css'
export default function LoginForm(){
    return(
        <div className="login-form">
        <form id="login-form">
            <h2 style="color: white;font-weight: 800;">لوحة تسجيل الدخول</h2>
            <br />
            <label className="username" name="username">إسم المستخدم :</label>
            <input type="text" minlength="8" maxlength="15" required id="username" />
            <br />
            <br />
            <label className="password" name="password">كلمة المرور :</label>
            <input type="password" minlength="10" maxlength="20" required id="password" />
            <br />
            <button type="submit" id="login" className="btn btn-primary" style={{padding: "5px",width: "100px", fontWeight: "bolder"}}>تسجيـل</button>
        </form>
    </div>
    );
}