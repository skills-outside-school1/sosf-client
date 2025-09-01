export function H1({ children, className }) {
  return (
    <h1
      className={`font-bold font-mont text-gray-800 text-2xl md:text-3xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }) {
  return (
    <h2
      className={`font-semibold font-mont text-gray-800 text-xl md:text-2xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }) {
  return (
    <h3
      className={`font-bold font-mont text-gray-800 text-lg md:text-xl  ${className}`}
    >
      {children}
    </h3>
  );
}

export function P({ children, className }) {
  return (
    <span
      className={`font-normal font-inter text-gray-800 text-base md:text-lg tracking-wide  leading-relaxed ${className}`}
    >
      {children}
    </span>
  );
}
