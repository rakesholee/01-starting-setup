import React from "react";
import Concept from "./components/Concept/Concept";
export default function DescriptionImageText(props) {
  return (
    <div>
      <Concept
        image={concepts[0].image}
        title={concepts[0].title}
        description={concepts[0].description}
      ></Concept>
      <Concept
        image={concepts[1].image}
        title={concepts[1].title}
        description={concepts[1].description}
      ></Concept>
      <Concept
        image={concepts[2].image}
        title={concepts[2].title}
        description={concepts[2].description}
      ></Concept>
    </div>
  );
}
