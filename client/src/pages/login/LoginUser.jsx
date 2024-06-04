import React, { useState } from 'react';
import styles from './LoginUser.module.css';
import avatar from '../../assets/log.png';
import { useNavigate } from 'react-router-dom';
import {login} from "../../services/auth";





function LoginUser() {
    const [data,setData] = useState({
        email:"", password:"",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    };
    const handleLogin = (e) => {
        e.preventDefault();
        login(data).then((response) => {
            alert(`Welcome, ${response.data.name}`);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userId",response.data.userId);
            navigate("/jobs");
        })
    };
    return (
        <>
            <div className={styles.page}>
                <div className={styles.left}>
                    <div className={styles.details}>
                        <div className={styles.leftHeader}>
                            <h2 className={styles.leftH1}>Already have an account?</h2>
                            <p className={styles.leftPara}>Your personal job finder is here</p>
                        </div> <br />
                        <div className={styles.form}>
                            <form  onSubmit={handleLogin}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={styles.input}
                                        // value={email}
                                        onChange={handleChange}
                                    />
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className={styles.input}
                                            //   value={password}
                                            onChange={handleChange}
                                        />

                                    </div> <br />

                                </div>
                                <div className={styles.leftBtn}>
                                    <button>Sign in</button>
                                </div>
                            </form>
                        </div>

                        <div className={styles.leftPara2}>
                            Don't have an account? <a href=''>Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightH2}>Your Personal Job Finder</div>
                    <div className={styles.img}>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
        </>
    );
}



export default LoginUser;
