import { useState } from "react";

const timelineItems = [
  {
    title: "2007",
    image:
      "https://images.unsplash.com/photo-1726565305860-8f6eb962685a?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bodyTitle: "2008 El Comienzo",
    description:
      "Descripción detallada del Evento 1. Este texto se mostrará al hacer hover sobre la imagen o el título.",
  },
  {
    title: "2008",
    image:
      "https://images.unsplash.com/photo-1726565305860-8f6eb962685a?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bodyTitle: "2008 El Comienzo",
    description:
      "Descripción detallada del Evento 2. Este texto se mostrará al hacer hover sobre la imagen o el título.",
  },
  {
    title: "2010",
    image:
      "https://images.unsplash.com/photo-1726565305860-8f6eb962685a?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bodyTitle: "2008 El Comienzo",
    description:
      "Descripción detallada del Evento 3. Este texto se mostrará al hacer hover sobre la imagen o el título.",
  },
  {
    title: "2020",
    image:
      "https://images.unsplash.com/photo-1726565305860-8f6eb962685a?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bodyTitle: "2008 El Comienzo",
    description:
      "Descripción detallada del Evento 4. Este texto se mostrará al hacer hover sobre la imagen o el título.",
  },
];

export default function Timeline() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-textColor rounded-lg"></div>

        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center justify-between mb-8`}
          >
            <div className="w-5/12"></div>
            <div className="w-2/12 flex justify-center">
              <div className="w-4 h-4 bg-naranja rounded-full absolute"></div>
            </div>
            <div
              className="w-5/12 relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h3 className=" text-xl text-textColor md:text-3xl font-bold mb-2  text-center ">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {hoveredItem === index && (
                <div className="absolute flex flex-col justify-center items-center inset-0 font-semibold bg-accentuate transition-all duration-300 ease-in  text-textColor p-4 rounded-lg overflow-y-auto ">
                  <span className=" md:text-3xl font-bold mb-2 text-center ">
                    {item.bodyTitle}
                  </span>
                  <p className=" text-lg">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
