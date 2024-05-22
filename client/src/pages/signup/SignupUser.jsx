import React, { useState, useEffect } from 'react';
import styles from './SignupUser.module.css';
import avatar from '../../assets/log.png';
import { useNavigate } from 'react-router-dom';


function SignupUser() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [checked,setChecked] = useState();
    const navigate = useNavigate();

     useEffect(() => {
        
     });

    return (
        <>
            <div className={styles.page}>
                <div className={styles.left}>
                    <div className={styles.details}>
                        <div className={styles.leftHeader}>
                            <h2 className={styles.leftH1}>Create an account</h2>
                            <p className={styles.leftPara}>Your personal job finder is here</p>
                        </div> <br />
                        <div className={styles.form}>
                            <div className="form-group">
                                <input
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                    className={styles.input}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                /> </div>
                            <div className="form-group">
                                <input
                                    type="Email"
                                    name="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /> </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="Mobile"
                                    placeholder="Mobile"
                                    className={styles.input}
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className={styles.input}
                                  value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                /> <br />

                            </div>
                            <div className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                     value={checked}
                                     onChange={(e) => setChecked(e.target.checked)}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="mobile">
                                    By creating an account, I agree to our terms of use and privacy policy
                                </label>
                            </div>
                        </div>
                        <div className={styles.leftBtn}>
                            <button>Create Account</button>
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
};

export default SignupUser;
