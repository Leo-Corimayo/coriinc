import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldAlert, MonitorPlay, Fingerprint, Lock } from "lucide-react";
import styles from "../Service.module.css";

export default function SeguridadService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        <ShieldAlert size={48} className={styles.iconGold} />
                    </div>
                    <h1 className={styles.title}>
                        Sistemas de <span className="text-gold-gradient">Seguridad</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Vigilancia Estética. Seguridad física y perimetral inquebrantable que se integra silenciosamente a la arquitectura.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section */}
            <section className={styles.detailsSection}>
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <MonitorPlay className={styles.iconSilver} size={32} />
                        <h3>Videovigilancia Analítica</h3>
                        <p>Sistemas de cámaras con interpretación de IA en tiempo real, seguimiento de activos y alertas preventivas 24/7 sin latencia.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Fingerprint className={styles.iconSilver} size={32} />
                        <h3>Controles de Acceso Biométricos</h3>
                        <p>Sistemas de validación por huella, geometría facial y tarjetas encriptadas para acceso restringido a zonas críticas de la organización.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Lock className={styles.iconSilver} size={32} />
                        <h3>Ciberseguridad y Redes Cerradas</h3>
                        <p>Implementación de redes lógicamente aisladas e infraestructura de cero confianza para proteger los sistemas de la intrusión exterior.</p>
                    </div>
                </div>

                {/* Info Block */}
                <div className={styles.infoBlock} style={{ marginTop: "4rem" }}>
                    <div className={styles.infoText}>
                        <h2>Tranquilidad. Automatizada.</h2>
                        <p>No vendemos cámaras; instalamos un perímetro de tranquilidad. Diseñamos nuestras arquitecturas para ser el guardián implacable e invisible de tu infraestructura que prevé anomalías antes de que escale al daño material. Protegemos lo que permite tu crecimiento.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Asegurar tu Infraestructura
                        </Link>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        <Image
                            src="/images/imagenes cori inc/camara negra.png"
                            alt="Sistema de Seguridad Integrado"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={styles.glowEffect}></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
