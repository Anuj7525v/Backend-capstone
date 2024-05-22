import React, { useState } from 'react';
import styles from './LoginUser.module.css';
import avatar from '../../assets/log.png';
function Loginuser() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
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
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className={styles.input}
                                  value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={styles.input}
                                       value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                    />

                                </div> <br />

                            </div>
                        </div>
                        <div className={styles.leftBtn}>
                            <button>Sign in</button>
                        </div>
                        <div className={styles.leftPara2}>
                            Don't have an account? <a href='#'>Sign Up</a>
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



export default Loginuser;
