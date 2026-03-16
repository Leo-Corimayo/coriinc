"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
                    CORI INC.
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
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
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
                </div>
            )}
        </nav>
    );
}
