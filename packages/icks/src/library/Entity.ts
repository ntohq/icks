
//entity
// characteristics: position, orientation, mass, and velocity
interface Properties {
   position: {
     x: number;
     y: number;
     z: number;
   };
 
   orientation: {
     yaw: number;
     pitch: number;
     roll: number;
   };

   velocity: {
      magnitude: number;
      direction: number;
   }

   mass: number;
 }

export default class Entity implements Properties {
   
   constructor(public position: Properties["position"], 
               public orientation: Properties["orientation"], 
               public velocity: Properties["velocity"],
               public mass: number) {}
    
}