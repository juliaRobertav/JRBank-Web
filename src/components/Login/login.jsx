import styles from './login.module.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import React, { useState } from 'react';


const Login = () => {

  const [userId, setUserId] = useState(0)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const buscar = ()=>{  //  BUSCAR USUARIOS CADASTRADOS
    axios.get('http://127.0.0.1:8000/api_login/' + email, senha)
      .then((res)=>{
        setEmail(res.data.email)
        setSenha(res.data.senha)
      }).catch((erro)=>{
        alert(erro.response.data.detail)
      })
  }

    return (

      
        <div className={styles.container}>

          
           
        <div className={styles.inpbtn}>  {/* INPUTS PARA LOGIN*/}
          <div className={styles.texto}>LOGIN</div>
          <div className={styles.inps} >
            <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" /> 
            <input className={styles.input}  value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
          </div>
      
          <div className={styles.btn} > {/* BOTÃO PARA LOGIN */}
          <Link to='saldo'> <button className={styles.button} onClick={buscar}> ENTRAR </button> </Link>
          </div> 

          <Link  to='/cadastro'><a>Não tem uma conta? Cadastre-se</a></Link>
        </div>
      </div>

    )
}

export default Login