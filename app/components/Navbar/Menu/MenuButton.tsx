export default function MenuButton() {
  return (
    <button
      data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
      <span className="sr-only">Open main menu</span>
      <img src="/assets/bars-icon.svg" alt="" />
    </button>
  );
}
