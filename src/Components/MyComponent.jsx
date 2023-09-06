import { useState } from "react";
export default function Scoreboard() {
const [player, setPlayer] = useState({
firstName: "",
lastName: "",
score: 10,
newX : 830,
newY : 470,
});


function handlePlusClick() {
    setPlayer({...player, score: player.score +1, newX: Math.random()*500, newY:Math.random()*500 })
}
function handleFirstNameChange(e) {
setPlayer({
...player,
firstName: e.target.value,
});
}
function handleLastNameChange(e) {
setPlayer({
...player,
lastName: e.target.value,
});
}


return (
<>
<h2 style={{color: "red"}}>Don't hate Me pls {player.firstName} {player.lastName} ^_^</h2>
<h4 style={{color: "red"}}>Try this button</h4>
<label>
Score: <b>{player.score}</b>{" "}
<button style={{ position: 'absolute', top: `${player.newY}px`, left: `${player.newX}px`, fontSize: '16px', padding: '5px 10px', backgroundColor: "#33b249"}}
     onClick={handlePlusClick}>+1</button>
</label>
<label>
Your First name:
<input value={player.firstName} onChange={handleFirstNameChange} />
</label>
<label>
Your Last name:  
<input value={player.lastName} onChange={handleLastNameChange} />
</label>
</>
);
}