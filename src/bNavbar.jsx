import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("time");

  const items = [
    { id: "home", label: "Home", icon: "fa-home" },
    { id: "detail", label: "Detail", icon: "fa-info-circle" },
    { id: "time", label: "Time", icon: "fa-clock" },
    { id: "location", label: "Location", icon: "fa-map-marker-alt" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary">
      <div className="max-w-md mx-auto h-16 flex justify-between items-center">

        {items.map((item) => (
          <a
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive(item.id);
            }}
            className={`flex flex-col items-center transition-all ${
              active === item.id
                ? "text-white bg-white/20 rounded-2xl p-3"
                : "text-gray-300"
            }`}
          >
            <i className={`fas ${item.icon} text-xl mb-1`} />
            <span className="text-xs">{item.label}</span>
          </a>
        ))}

      </div>
    </nav>
  );
}

export default Navbar;