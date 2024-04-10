export const intro = {
  hidden: { opacity: 0, Scale: 0.5 },
  visible: {
    opacity: 1,
    Scale: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const children = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, type: "spring" },
};

export const introNav = {
  hidden: { opacity: 0, Scale: 0.5 },
  visible: {
    opacity: 1,
    Scale: 1,
    transition: {
      delay: 1,
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const childrenNav = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, type: "spring" },
};

export const introInput = {
  hidden: { opacity: 0, Scale: 0.5 },
  visible: {
    opacity: 1,
    Scale: 1,
    transition: {
      delay: 1.5,
      duration: 0.3,
    },
  },
};
