import { LayoutPanelLeft, LayoutGrid } from "lucide-react";

const MenuBar = ({ isOpen, toggle, className = "" }) => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      className={`transition-all duration-200 hover:scale-110 ${className}`}
    >
      {isOpen ? (
        <LayoutPanelLeft size={28} className="text-red-600" />
      ) : (
        <LayoutGrid size={28} className="text-purple-600" />
      )}
    </button>
  );
};

export default MenuBar;
