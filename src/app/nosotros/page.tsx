"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const dualidadPhrases = [
    {
        icon: "⚡",
        title: "Entendemos el código. Dominamos la máquina.",
        desc: "Ingeniería que domina todo el espectro tecnológico, desde el circuito impreso hasta la inteligencia artificial.",
    },
    {
        icon: "🔬",
        title: "Donde la placa de circuito se encuentra con el algoritmo de IA.",
        desc: "Unimos el hardware industrial robusto con el software inteligente moderno para crear soluciones integrales.",
    },
    {
        icon: "🛡️",
        title: "Dominio total: del circuito impreso a la IA.",
        desc: "No solo informática; Alta Ingeniería. Cada proyecto refleja nuestra obsesión por la precisión absoluta.",
    },
];

const valoresData = [
    {
        number: "01",
        title: "Precisión",
        phrase: "La costura digital es nuestra precisión electrónica.",
    },
    {
        number: "02",
        title: "Impacto",
        phrase: "Elevamos su entorno operativo con diseño de autor.",
    },
    {
        number: "03",
        title: "Innovación",
        phrase: "Impulsando el futuro productivo de la región.",
    },
    {
        number: "04",
        title: "Excelencia",
        phrase: "Garantizando el salto tecnológico de su empresa.",
    },
];

export default function NosotrosPage() {
    return (
        <div className={styles.container}>
            {/* ——— HERO ——— */}
            <section className={styles.hero}>
                <motion.span
                    className={styles.heroLabel}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Sobre Nosotros
                </motion.span>
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    Cori Inc. — Salto
                    <br /> Tecnológico.
                </motion.h1>
                <motion.p
                    className={styles.heroSub}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    ...
                </motion.p>
            </section>

            {/* ——— MANIFESTO ——— */}
            <section className={styles.manifesto}>
                <motion.div
                    className={styles.manifestoContent}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1 }}
                >
                    <span className={styles.manifestoLabel}>Manifiesto</span>
                    <h2 className={styles.manifestoTitle}>
                        No solo informática;
                        <br />
                        <em>Alta Ingeniería.</em>
                    </h2>
                    <p className={styles.manifestoText}>
                        Cori Inc. nació con una visión clara: fusionar la robustez del hardware industrial con la
                        inteligencia del software moderno. Desde La Rioja, diseñamos ecosistemas tecnológicos donde la
                        automatización, la inteligencia artificial y la domótica convergen en una sola arquitectura
                        precisa, estética y funcional.
                    </p>
                    <p className={styles.manifestoText}>
                        Creemos que la tecnología no solo debe funcionar — debe sentirse, verse y elevar cada proceso
                        productivo al siguiente nivel. Cada proyecto que entregamos lleva la firma de una obsesión por la
                        calidad, el detalle y la innovación sin concesiones.
                    </p>
                </motion.div>
            </section>

            {/* ——— FOUNDER ——— */}
            <section className={styles.founder}>
                <div className={styles.founderGrid}>
                    <motion.div
                        className={styles.founderImageCol}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className={styles.founderImageWrapper}>
                            <Image
                                src="/images/imagenes cori inc/sobre nos.png"
                                alt="Fundador de Cori Inc."
                                fill
                                quality={100}
                                className={styles.founderImage}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.founderTextCol}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className={styles.founderLabel}>Fundador</span>
                        <h2 className={styles.founderName}>Leandro Corimayo</h2>
                        <p className={styles.founderRole}>Founder & CEO</p>
                        <div className={styles.founderDivider} />
                        <p className={styles.founderBio}>
                            Ingeniero con pasión por la convergencia entre hardware y software. Desde La Rioja,
                            lidera Cori Inc. con la convicción de que la tecnología de vanguardia no es exclusiva de
                            las grandes capitales — es una cuestión de visión, disciplina y excelencia técnica.
                        </p>
                        <p className={styles.founderBio}>
                            Su enfoque combina la rigurosidad de la ingeniería electrónica con la agilidad del
                            desarrollo de software y la inteligencia artificial, creando soluciones que trascienden
                            las expectativas del mercado regional.
                        </p>
                        <p className={styles.founderQuote}>
                            &quot;Desde La Rioja para el mundo.&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ——— DUALIDAD TÉCNICA ——— */}
            <section className={styles.dualidad}>
                <motion.div
                    className={styles.dualidadHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className={styles.dualidadLabel}>Filosofía Técnica</span>
                    <h2 className={styles.dualidadTitle}>
                        Ingeniería que domina todo
                        <br /> el espectro tecnológico.
                    </h2>
                </motion.div>
                <div className={styles.dualidadGrid}>
                    {dualidadPhrases.map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.dualidadCard}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <span className={styles.dualidadIcon}>{item.icon}</span>
                            <h3 className={styles.dualidadCardTitle}>{item.title}</h3>
                            <p className={styles.dualidadCardDesc}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ——— VALORES ——— */}
            <section className={styles.valores}>
                <motion.div
                    className={styles.valoresHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className={styles.valoresLabel}>Nuestros Pilares</span>
                    <h2 className={styles.valoresTitle}>
                        Tecnología que se siente,
                        <br /> se ve y funciona.
                    </h2>
                </motion.div>
                <div className={styles.valoresGrid}>
                    {valoresData.map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.valorCard}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <span className={styles.valorNumber}>{item.number}</span>
                            <h3 className={styles.valorTitle}>{item.title}</h3>
                            <p className={styles.valorPhrase}>{item.phrase}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ——— CTA ——— */}
            <section className={styles.cta}>
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9 }}
                >
                    <h2 className={styles.ctaTitle}>
                        Garantizando el salto tecnológico
                        <br /> de su empresa.
                    </h2>
                    <p className={styles.ctaSub}>Lujo técnico para procesos productivos.</p>
                    <Link href="/contacto" className={styles.ctaButton}>
                        Contáctenos
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
