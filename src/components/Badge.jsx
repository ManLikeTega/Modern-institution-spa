const Badge = ({ children, className, Icon }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm backdrop-blur-sm ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </div>
  );
};

export default Badge;
