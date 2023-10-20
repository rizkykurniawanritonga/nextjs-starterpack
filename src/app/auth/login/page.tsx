"use client";
import "@/styles/login.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { push } = useRouter();
  async function loginAction() {
    const ste: any = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    console.log(ste);

    if (ste?.error) {
      alert("Terjadi kesalahan autentikasi");
    } else {
      alert("Sukses autentikasi!");
      push("/dashboard");
    }
  }
  return (
    <main className="form-signin w-100 m-auto">
      <form
        onSubmit={(e) => {
          loginAction();
          e.preventDefault();
        }}
      >
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <h6 className="h6 mb-3 fw-normal">
          Email: me@example.com
          <br />
          Pass: 123
        </h6>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="me@example.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="123"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setPassword(e.target.value)
            }
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>
  );
}
