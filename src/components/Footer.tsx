import styles from './Footer.module.css';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                
                {/* Huge Watermark Background Text */}
                <div className={styles.watermarkContainer}>
                    <Image 
                        src="/images/logofinal.png" 
                        alt="" 
                        width={300} 
                        height={300} 
                        className={styles.watermarkLogo}
                    />
                    <span className={styles.watermarkText}>CORI INC.</span>
                </div>

                {/* Overlaid minimal info */}
                <div className={styles.infoContainer}>
                    <p className={styles.locationText}>La Rioja, Argentina.</p>
                </div>

                {/* The sparkle icon on the right */}
                <div className={styles.sparkleContainer}>
                    <Sparkles 
                        size={80} 
                        strokeWidth={1} 
                        color="#ffffff" 
                        fill="#ffffff" 
                        className={styles.sparkleIcon} 
                    />
                </div>
            </div>
        </footer>
    );
}
