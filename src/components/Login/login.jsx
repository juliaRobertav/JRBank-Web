import styles from './login.module.css'
import { Link } from "react-router-dom"

const Login = () => {


    return (

      
        <div className={styles.container}>

          
           
        <div className={styles.inpbtn}>  {/* INPUTS PARA LOGIN*/}
          <div className={styles.texto}>LOGIN</div>
          <div className={styles.inps} >
            <input className={styles.input} type="text" placeholder="Email" /> 
            <input className={styles.input} type="password" placeholder="Senha" />
          </div>
      
          <div className={styles.btn} > {/* BOTÃO PARA LOGIN */}
          <button className={styles.button}> ENTRAR </button>
          </div> 

          <Link  to='/cadastro'><a>Não tem uma conta? Cadastre-se</a></Link>
        </div>
      </div>

    )
}

export default Login