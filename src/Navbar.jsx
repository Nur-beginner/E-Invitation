import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const items = [
    { path: "/", label: "Home", icon: "fa-home" },
    { path: "/detail", label: "Detail", icon: "fa-info-circle" },
    { path: "/time", label: "Time", icon: "fa-clock" },
    { path: "/location", label: "Location", icon: "fa-map-marker-alt" },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-primary px-10 py-2">
        <div className="max-w-md mx-auto h-16 flex justify-between items-center">
          {items.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center transition-all ${
                  isActive
                    ? "text-white bg-white/20 rounded-2xl p-3"
                    : "text-gray-300"
                }`}
              >
                <i className={`fas ${item.icon} text-xl mb-1`} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="pb-16 md:pb-0"></div>
    </>
  );
}

export default Navbar;
