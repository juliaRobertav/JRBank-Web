import styles from './Cadastro.module.css'
import { Link } from 'react-router-dom'
// import ImagemX from '/src/assets/X.svg'
import axios from 'axios';

import React, { useState } from 'react';

function Cadastro (){  // FUNÇÃO DE CADASTRO

  const [userId, setUserId] = useState(0)
  const [nome, setNome] = useState('')
  const [nasc, setNasc] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // const buscar = ()=>{  //  BUSCAR USUARIOS CADASTRADOS
  //   axios.get('http://127.0.0.1:8000/cadastro/' + nome)
  //     .then((res)=>{
  //       setNome(res.data.nome)
  //     }).catch((erro)=>{
  //       alert(erro.response.data.detail)
  //     })
  // }

  const adicionar = ()=>{ // CADASTRAR NOVO USUARIO
    axios.post('http://127.0.0.1:8000/api_cadastro/', 
    {
      nome: nome,
      nasc: nasc,
      cpf: cpf,
      email: email,
      senha: senha

    },
    {}
    ).then((res)=>{
      console.log(res)
    }).catch((erro)=>{
      console.log(erro)
    })
  }


    return(
        <div className={styles.container}>

          
           
            <div className={styles.inpbtn}>  {/* INPUTS PARA CADASTRO*/}
              <div className={styles.texto}>CADASTRE-SE</div>
              <div className={styles.inps} >
                <input className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome" /> 
                <input className={styles.input} value={nasc} onChange={(e) => setNasc(e.target.value)} type="date" placeholder="Data de Nascimento" />
                <input className={styles.input} value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF" /> 
                <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" /> 
                <input className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
              </div>
          
              <div className={styles.btn} > {/* BOTÃO PARA CADASTRAR */}
              <Link to='saldo'> <button className={styles.button}  onClick={adicionar}> CADASTRAR</button> </Link>
              </div> 
            </div>
          </div>
    )
}

export default Cadastro