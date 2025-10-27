import Link from "next/link";

export default function Identification(){
    return (
        <>
            <div>
                <ul>
                    <li>
                        <label htmlFor="login_ident">Enter login</label>
                        <input id='login_ident' type='text' value='Login'/>
                    </li>
                    <li>
                        <label htmlFor="password_ident">Enter password</label>
                        <input id='password_ident' type='password' value='Password'/>
                    </li>
                </ul>


                <button type='submit'>Submit</button>
                <p>Y may<Link href='Authorization.jsx'>SIGN UP</Link></p>
            </div>
        </>
    )
}