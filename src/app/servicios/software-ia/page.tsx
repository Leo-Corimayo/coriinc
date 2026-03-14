import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Code2, Server, Smartphone, Database, Cpu, BrainCircuit, LineChart, ShieldCheck } from "lucide-react";
import styles from "../Service.module.css";

export default function SoftwareIAService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al Inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        {/* Combine icons playfully */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Code2 size={48} className={styles.iconGold} />
                            <Cpu size={48} className={styles.iconSilver} />
                        </div>
                    </div>
                    <h1 className={styles.title}>
                        Sistemas de Información & <span className="text-silver-gradient">IA</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Inteligencia Sintética. Ingeniería de software robusta y el cerebro digital de tu empresa para operaciones críticas.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section Combined */}
            <section className={styles.detailsSection}>

                {/* 1. Software Core Grid */}
                <div className={styles.featuresGrid} style={{ marginBottom: "2rem" }}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Server className={styles.iconSilver} size={32} />
                        <h3>Arquitectura Cloud & Backend</h3>
                        <p>Diseño de microservicios, APIs de alto rendimiento y bases de datos distribuidas preparadas para escalar infinitamente.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Smartphone className={styles.iconSilver} size={32} />
                        <h3>Aplicaciones Web y Móviles</h3>
                        <p>Interfaces nativas y web apps progresivas centradas en la experiencia del usuario y performance radical.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Database className={styles.iconSilver} size={32} />
                        <h3>Sistemas Core Empresariales</h3>
                        <p>Desde CRMs a medida hasta sistemas ERP que se adaptan exactamente a los flujos únicos de tu industria.</p>
                    </div>
                </div>

                {/* 2. AI Enhancements Grid */}
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <BrainCircuit className={styles.iconGold} size={32} />
                        <h3>Machine Learning Aplicado</h3>
                        <p>Algoritmos de aprendizaje profundo para análisis de comportamiento, optimización logística y calidad automatizada.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <LineChart className={styles.iconGold} size={32} />
                        <h3>Sistemas de Predicción</h3>
                        <p>Visualización y anticipación de tendencias del mercado, demanda de inventario mediante Big Data.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <ShieldCheck className={styles.iconGold} size={32} />
                        <h3>Agentes GenAI Autónomos</h3>
                        <p>Integración de Modelos LLM para soporte automatizado, copilotos internos y generación de contenido dinámico.</p>
                    </div>
                </div>

                {/* Info Block Combined */}
                <div className={styles.infoBlock} style={{ marginTop: "4rem" }}>
                    <div className={styles.infoText}>
                        <h2>De la teoría a la utilidad real</h2>
                        <p>En Cori Inc. no construimos simples &quot;aplicaciones&quot;; desarrollamos activos tecnológicos. Transformamos la abrumadora cantidad de datos de tu organización en una ventaja competitiva neta automatizando lo repetitivo utilizando los mismos stacks que las empresas líderes mundiales.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Iniciar Proyecto de Software e IA
                        </Link>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        <Image
                            src="/images/imagenes-cori-inc/tableta-IA.png"
                            alt="Software and IA Synergy"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={styles.glowEffectSilver}></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
