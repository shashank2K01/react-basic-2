import React from 'react';

const List = ( {people}) => {
  return (
    <>
      {people.map((person)=>{
          const{id,name,age,image} = person;
        return(
           <div id = {id} className = "person">
               <img src = {image} alt ={name}/>
               <div>
                   <h4>{name}
                   </h4>
                   <h4>
                       {age} years
                   </h4>
               </div>
           </div>
        )
      }
      )}
    </>
  );
};

export default List;
