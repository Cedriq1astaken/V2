let playerName;
let realPlayer;
let detect = async () =>{
    const fetched = await fetch("/JSON/name.json")
    const theNames = await fetched.json()
    const data = JSON.parse(theNames)
    data.forEach((person)=>{
        person.alias.forEach((aName)=>{
            if(playerName.includes(aName) || aName.includes(playerName)){
                realPlayer = person.name;
            }
        })
    })
}

