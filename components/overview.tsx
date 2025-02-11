'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon } from './icons';
import { useSession } from 'next-auth/react';

export const Overview = () => {
  const { data } = useSession();
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <MessageIcon size={32} />
        </p>
        <p>
          Welcome <strong>{data?.user?.email}</strong>
        </p>
        <p>
          Meet Mantrika—an innovative AI assistant created by Sarwagya Singh and
          fine-tuned with DeepSeek. Built for general-purpose tasks, Mantrika
          seamlessly integrates with your workflow to deliver smart insights,
          effective solutions, and friendly guidance.
        </p>
      </div>
    </motion.div>
  );
};
