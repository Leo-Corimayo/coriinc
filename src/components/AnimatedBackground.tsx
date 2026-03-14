"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // Usamos slim para mejor rendimiento

export default function AnimatedBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Carga solo las animaciones esenciales para que rinda a 60fps sin sobrecargar la CPU de los móviles
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            links: {
                                opacity: 0.8
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 250,
                        enable: true,
                        opacity: 0.1, // Lineas por defecto casi invisibles
                        width: 0.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.5, // Movimiento muy lento
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40, // Menos cantidad, más minimalista
                    },
                    opacity: {
                        value: 0.2, // Puntos principales casi invisibles
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.1,
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 1.5 },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1, // Por encima de la foto pero debajo del texto
                pointerEvents: "none", // Muy importante para no bloquear clicks en la web
            }}
            className="-z-10 absolute inset-0 pointer-events-none"
        />
    );
}
