import { motion } from 'motion/react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Three rotating e's logo container */}
      <div className="flex items-center gap-1.5 h-10">
        {/* SVG 1 */}
        <motion.div
          className="w-7 h-10 flex items-center justify-center text-accent group-hover:text-white transition-colors duration-500"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 8,
          }}
          whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        >
          <svg width="24" height="35" viewBox="0 0 47 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8909 38.6442V38.6442C36.2949 50.4604 21.0438 54.2476 11.6814 45.456V45.456" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M39.8909 38.6442L39.7175 39.2139C36.1109 51.0649 21.0341 54.8263 11.3852 46.2823V46.2823" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M6.83203 31.028L6.93531 30.6782C10.4682 18.7122 25.6456 14.8233 35.4385 23.3747V23.3747" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M6.83203 31.028L6.98916 30.4958C10.4528 18.7644 25.4496 15.1171 34.846 23.7209V23.7209" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="33.1661" y1="-1" x2="1" y2="-1" transform="matrix(-0.730863 0.682524 -0.750769 -0.660565 35.2109 22.5801)" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* SVG 2 */}
        <motion.div
          className="w-8.5 h-10 flex items-center justify-center text-accent group-hover:text-white transition-colors duration-500"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        >
          <svg width="30" height="35" viewBox="0 0 59 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.3517 49.2975V49.2975C27.4537 55.1101 13.9916 47.0039 13.588 34.1671V34.1671" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M38.3517 49.2975L37.8263 49.5778C26.8961 55.4074 13.5756 47.4062 12.7943 34.5419V34.5419" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M20.3616 20.5331L20.682 20.3588C31.6413 14.3957 45.1233 22.3778 46.0011 35.3492V35.3492" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M20.3616 20.5331L20.849 20.2679C31.5936 14.4217 44.777 22.447 45.3374 35.1751V35.1751" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="33.1661" y1="-1" x2="1" y2="-1" transform="matrix(-0.999415 -0.034181 -0.0637841 -0.997964 46.4023 34.626)" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* SVG 3 */}
        <motion.div
          className="w-9 h-10 flex items-center justify-center text-accent group-hover:text-white transition-colors duration-500"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 12,
          }}
          whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        >
          <svg width="32" height="16" viewBox="0 0 63 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3743 30.9458V30.9458C12.8914 24.4141 13.1805 8.70245 24.0957 1.93457V1.93457" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M23.3743 30.9458L22.8689 30.6309C12.3551 24.0799 12.6241 8.54337 23.3743 1.43457V1.43457" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M39.2901 0.985345L39.6013 1.17566C50.2451 7.68521 50.0734 23.3519 39.2787 30.5979V30.5979" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M39.2901 0.985345L39.7635 1.27487C50.1987 7.65684 49.8403 23.0866 39.0977 29.936V29.936" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="33.1661" y1="-1" x2="1" y2="-1" transform="matrix(-0.470106 -0.88261 0.83237 -0.55422 40.1074 30.583)" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Brand name */}
      <span className="font-serif text-lg tracking-[0.1em] text-white font-medium ml-1">
        ДЗЕН <span className="font-sans font-black text-accent group-hover:text-white transition-colors">IT</span>
      </span>
    </div>
  );
}
