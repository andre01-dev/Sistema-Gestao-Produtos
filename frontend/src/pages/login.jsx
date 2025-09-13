import './login.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const [open, setOpen] = useState(false);
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [cadUsername, setCadUsername] = useState("");
    const [cadPassword, setCadPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5010/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario: loginUsername, senha: loginPassword })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.logado) {
                    localStorage.setItem("logado", "true"); // persiste login
                    setIsLoggedIn(true);                     // atualiza estado global
                    setLoginUsername("");
                    setLoginPassword("");
                    navigate("/");                            // redireciona para home
                }
            } else if (response.status === 401) {
                alert("Usuário ou senha incorretos");
            } else {
                alert("Erro no servidor ao tentar logar");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Erro de conexão com o servidor");
        }
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5010/login/cadastrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario: cadUsername, senha: cadPassword })
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Usuário cadastrado com sucesso! ID: ${data.id}`);
                setOpen(false);
                setCadUsername("");
                setCadPassword("");
            } else {
                alert("Erro ao cadastrar usuário");
            }
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro de conexão com o servidor");
        }
    };

    return (
        <div className="conteiner-login">
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label>Nome de Usuário</label>
                    <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
                    <label>Senha</label>
                    <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    <div className='botoes'>
                        <button className='bt-login'>Entrar</button>
                        <button type="button" className='bt-login' onClick={() => setOpen(true)}>Criar Conta</button>
                    </div>
                </form>

                {open && (
                    <div className='pop-criar-conta'>
                        <div className='pop-criar-conta-content'>
                            <h2>Criar conta</h2>
                            <form onSubmit={handleCadastro}>
                                <input type="text" placeholder='Nome de usuário' value={cadUsername} onChange={(e) => setCadUsername(e.target.value)} />
                                <input type="password" placeholder='Senha' value={cadPassword} onChange={(e) => setCadPassword(e.target.value)} />
                                <div className='pop-botoes'>
                                    <button type='submit'>Cadastrar</button>
                                    <button type='button' onClick={() => setOpen(false)}>Fechar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
