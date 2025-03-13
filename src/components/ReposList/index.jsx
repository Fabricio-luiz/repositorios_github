import { useEffect, useState } from "react";

import styles from "./ReposList.modules.css";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/Fabricio-Luiz/repos")
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
        })
    }, []);

    return (
        <>
        {estaCarregando && (
            <h1>Caregando...</h1>
        )}
        <ul className={styles.list}>
            {repos.map(({id, name, language, html_url}) => (
                <li className={styles.listItem} key={id}> 
                    <div className={styles.itemName}>
                        <b>Nome: </b> {name} <br/>
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem: </b> {language} <br/>
                    </div>
                    <a className={styles.itemLink} href={html_url} target="_blank">Visitar no Github</a> <br/>
                </li>
            ))}
        </ul>
        </>
    )    
}

export default ReposList;