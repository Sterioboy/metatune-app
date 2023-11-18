import ToggleButtonGroup from '../toggle-buttons/toggle-buttons';

const Navbar = () => {
  return (
    <nav className="mb-4 z-10 flex items-center justify-center rounded-xl transition-all w-full backdrop-blur-sm md:top-4 xl:top-[20px] bg-slate-200 py-2">
      <ToggleButtonGroup />
    </nav>
  );
};

export default Navbar;
