//This component is a Framer Motion component that creates a scroll-linked animation effect in the top bar of the page. This shows a progress bar that fills up as the user scrolls down the page.
"use client"

import { motion, useScroll } from "motion/react"
import Home from "../../views/Home/Home"

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                    zIndex: 1000,
                }}
            />
            <Home />
        </>
    )
}