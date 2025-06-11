import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "../assets/styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                © {new Date().getFullYear()} Projetos Cleiton Santos - Todos os
                direitos reservados
            </p>

            <div className={styles.footerContent}>
                <span>Desenvolvido por</span>
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                    aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                >
                    Cleiton Santos
                    <FaExternalLinkAlt className={styles.footerIcon} />
                </a>
            </div>

            <div className={styles.footerLinks}>
                <a href="#topo" className={styles.footerLink}>
                    Voltar ao topo
                </a>{" "}
                |
                <a
                    href="https://github.com/cleitoncfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
