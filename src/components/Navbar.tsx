"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Determine if we need white text (e.g., on /nosotros or /servicios where background is black)
    const isLightPage = pathname === '/nosotros' || pathname?.startsWith('/servicios');
    const navbarClasses = `${styles.navbar} ${isLightPage ? styles.light : ''}`;

    return (
        <nav className={navbarClasses}>
            <div className={styles.navContainer}>
                {/* Logo textual simple + Imagen */}
                <Link href="/" className={styles.brandName}>
                    <Image 
                        src="/images/logofinal.png" 
                        alt="Cori Inc" 
                        width={30} 
                        height={30} 
                        className={styles.logo}
                    />
                    <span className={styles.brandText}>CORI INC.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    <Link href="/nosotros" className={styles.navLink}>
                        Nosotros
                    </Link>
                    <Link href="/#servicios" className={styles.navLink}>
                        Servicios
                    </Link>
                    <Link href="/contacto" className={styles.navLink}>
                        Contacto
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className={styles.mobileNavLinks}>
                            <Link href="/nosotros" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                Nosotros
                            </Link>
                            <Link href="/#servicios" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                Servicios
                            </Link>
                            <Link href="/contacto" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                Contacto
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
