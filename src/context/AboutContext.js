import { createContext } from "react";

 export  const AboutContext =createContext();

function AboutContextProvider({children}){
const about= {
    name:"Nombo ibrahim",
    hobbies: ["Singing","Running", "Eating"],
    bio: "I am a passionate young lady who desires community growth. "
}

    return(
<AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>

    )
}

export default AboutContextProvider