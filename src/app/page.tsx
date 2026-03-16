"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ——— Todas las frases organizadas por grupo ——— */
const phrasesIdentidad = [
    "Desde La Rioja para el mundo.",
    "Cori Inc. – La Estética de la Precisión.",
    "Ingeniería que nace en La Rioja.",
    "Tecnología invisible, diseño impecable.",
    "Redefiniendo los límites de la integración tecnológica.",
    "No solo informática; Alta Ingeniería.",
];

const phrasesHero = [
    "Entendemos el código. Dominamos la máquina.",
    "Donde la placa de circuito se encuentra con el algoritmo de IA.",
    "Unimos el hardware industrial robusto con el software inteligente moderno.",
    "Dominio total: del circuito impreso a la Inteligencia Artificial.",
    "Ingeniería que domina todo el espectro tecnológico.",
];

const phrasesImpacto = [
    "La costura digital es nuestra precisión electrónica.",
    "Lujo técnico para procesos productivos.",
    "Elevamos su entorno operativo con diseño de autor.",
    "Impulsando el futuro productivo de la región.",
    "Tecnología que se siente, se ve y funciona.",
    "Garantizando el salto tecnológico de su empresa.",
    "Cori Inc. Precision Engineering.",
];

/* ——— Componente de frase rotativa ——— */
function RotatingPhrase({ phrases }: { phrases: string[] }) {
    const [index, setIndex] = useState(0);

    const advance = useCallback(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
    }, [phrases.length]);

    useEffect(() => {
        const timer = setInterval(advance, 7000);
        return () => clearInterval(timer);
    }, [advance]);

    return (
        <section className={styles.phraseSection}>
            <div className={styles.phraseWrapper}>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        className={styles.phrase}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        &ldquo;{phrases[index]}&rdquo;
                    </motion.p>
                </AnimatePresence>
            </div>
        </section>
    );
}

/* ——— Subtítulo rotativo para el Hero ——— */
function HeroSubtitle({ phrases }: { phrases: string[] }) {
    const [index, setIndex] = useState(0);

    const advance = useCallback(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
    }, [phrases.length]);

    useEffect(() => {
        const timer = setInterval(advance, 7000);
        return () => clearInterval(timer);
    }, [advance]);

    return (
        <div className={styles.heroSubtitleWrapper}>
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    &ldquo;{phrases[index]}&rdquo;
                </motion.p>
            </AnimatePresence>
        </div>
    );
}

export default function Home() {
    return (
        <div className={styles.container}>
            {/* 1. HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="/images/imagenes-cori-inc/modelo-hero.png"
                        alt="Cori Inc Artificial Intelligence Model"
                        fill
                        quality={100}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroTextContainer}>
                    <Image 
                        src="/images/logofinal.png" 
                        alt="" 
                        width={80} 
                        height={80} 
                        className={styles.heroLogo}
                        priority
                    />
                    <h1 className={styles.heroTitle}>CORI INC.</h1>
                    <HeroSubtitle phrases={phrasesHero} />
                </div>
            </section>

            {/* FRASES DE IDENTIDAD — Rotación automática */}
            <RotatingPhrase phrases={phrasesIdentidad} />

            {/* 2. THE SERVICES GRID */}
            <section id="servicios" className={styles.gridSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionPreTitle}>Nuestros Servicios</span>
                    <h2 className={styles.sectionTitle}>
                        Soluciones <span className={styles.textAccent}>Tecnológicas</span>
                    </h2>
                </div>
                <div className={styles.gridContainer}>
                    <div className={`${styles.gridItem} ${styles.itemIA}`}>
                        <Link href="/servicios/software-ia" className={styles.gridLink}>
                            <div className={styles.gridImageWrapper}>
                                <Image src="/images/imagenes-cori-inc/tablet-y-manos.png" alt="Sistemas de Información & IA" fill className={styles.gridImage} />
                                <div className={styles.gridOverlay} />
                            </div>
                            <div className={styles.gridTextContainer}>
                                <h3 className={styles.gridTitle}>Sistemas de Información & IA.</h3>
                                <p className={styles.gridSubtitle}>Inteligencia Sintética.</p>
                            </div>
                        </Link>
                    </div>

                    <div className={`${styles.gridItem} ${styles.itemSeguridad}`}>
                        <Link href="/servicios/seguridad" className={styles.gridLink}>
                            <div className={styles.gridImageWrapper}>
                                <Image src="/images/imagenes-cori-inc/camara-negra.png" alt="Sistemas de Seguridad" fill className={styles.gridImage} />
                                <div className={styles.gridOverlay} />
                            </div>
                            <div className={styles.gridTextContainer}>
                                <h3 className={styles.gridTitle}>Seguridad.</h3>
                                <p className={styles.gridSubtitle}>Vigilancia Estética.</p>
                            </div>
                        </Link>
                    </div>

                    <div className={`${styles.gridItem} ${styles.itemAuto}`}>
                        <Link href="/servicios/automatizacion" className={styles.gridLink}>
                            <div className={styles.gridImageWrapper}>
                                <Image src="/images/imagenes-cori-inc/soldador-color.png" alt="Sistemas de Automatización" fill className={styles.gridImage} />
                                <div className={styles.gridOverlay} />
                            </div>
                            <div className={styles.gridTextContainer}>
                                <h3 className={styles.gridTitle}>Automatización.</h3>
                                <p className={styles.gridSubtitle}>Precisión en Movimiento.</p>
                            </div>
                        </Link>
                    </div>

                    <div className={`${styles.gridItem} ${styles.itemDomotica}`}>
                        <Link href="/servicios/domotica" className={styles.gridLink}>
                            <div className={styles.gridImageWrapper}>
                                <Image src="/images/imagenes-cori-inc/domotica-mano-y-panel.png" alt="Domotica IoT" fill className={styles.gridImage} />
                                <div className={styles.gridOverlay} />
                            </div>
                            <div className={styles.gridTextContainer}>
                                <h3 className={styles.gridTitle}>Domótica & IoT.</h3>
                                <p className={styles.gridSubtitle}>Espacios Sensibles.</p>
                            </div>
                        </Link>
                    </div>

                    <div className={`${styles.gridItem} ${styles.itemConsultoria}`}>
                        <Link href="/servicios/consultoria" className={styles.gridLink}>
                            <div className={styles.gridImageWrapper}>
                                <Image src="/images/imagenes-cori-inc/modelo-mujer.png" alt="Consultoría Tecnológica" fill className={styles.gridImage} />
                                <div className={styles.gridOverlay} />
                            </div>
                            <div className={styles.gridTextContainer}>
                                <h3 className={styles.gridTitle}>Consultoría.</h3>
                                <p className={styles.gridSubtitle}>Visión Estratégica.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>


            {/* 3. SOBRE NOSOTROS */}
            <section className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutTextContent}>
                        <h2 className={styles.aboutTitle}>Sobre Nosotros</h2>
                        <h3 className={styles.aboutHeadline}>
                            Innovación en la intersección del código y la materia.
                        </h3>
                        <p className={styles.aboutDescription}>
                            En Cori Inc., estructuramos el futuro. Diseñamos ecosistemas donde la robótica industrial,
                            la inteligencia sintética y la domótica operan centralizadas y fluidas.
                        </p>
                        <p className={styles.aboutDescription}>
                            Nuestra ingeniería no solo resuelve problemas operativos,
                            sino que define la estética del rendimiento corporativo y la seguridad de misión crítica.
                        </p>
                    </div>
                </div>
            </section>

            {/* FRASES DE ESTILO E IMPACTO — Rotación automática */}
            <RotatingPhrase phrases={phrasesImpacto} />
        </div>
    );
}
