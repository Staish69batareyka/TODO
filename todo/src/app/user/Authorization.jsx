import Link from "next/link";

export default function Authorization(){
    return(
        <>
            <div>
                <ul>
                    <li>
                        <label htmlFor='login_auth'>Enter login</label>
                        <input id='login_auth' type='text' placeholder='Login'/>
                    </li>
                    <li>
                        <label htmlFor="password_auth">Enter password</label>
                        <input id='password_auth' type='password' placeholder='Password'/>
                    </li>
                    <li>
                        <label htmlFor="password_auth_repeat">Repeat password</label>
                        <input id='password_auth_repeat' type='password' placeholder='Repeat password'/>
                    </li>
                </ul>

                <button type='submit'>Submit</button>
                <p>Y may<Link href='Identification.jsx'>SIGN IN</Link></p>
            </div>
        </>
    )
}