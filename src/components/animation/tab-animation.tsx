import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface TabTransitionProps {
  activeTab: string | number;
  children: ReactNode;
}

export function TabTransition({ activeTab, children }: TabTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
