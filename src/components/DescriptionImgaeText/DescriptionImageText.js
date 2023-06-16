import React from "react";
import Concept from "../Concept/Concept";
export default function DescriptionImageText({ concept }) {
   return (
      <div>
         {/* <Concept
            image={props.concepts[0].image}
            title={props.concepts[0].title}
            description={props.concepts[0].description}
         />
         <Concept
            image={props.concepts[1].image}
            title={props.concepts[1].title}
            description={props.concepts[1].description}
         />
         <Concept
            image={props.concepts[2].image}
            title={props.concepts[2].title}
            description={props.concepts[2].description}
         /> */}
         {concept.map((item) => (
            <Concept
               image={item.image}
               title={item.title}
               description={item.description}
            />
         ))}
      </div>
   );
}
