import React,{useState}  from "react";
import '../components/Counter.css';

export default function Counter() {
  const [pressed, setPressed] = useState({count: 0});
  const handleClick = () => {
  setPressed(({count}) => ({
    count: count + 1
  }));
  };

return (
    <div className="counteiner">
        <h1> Week 29</h1>
<button className="btn" onClick={handleClick}>{pressed.count}</button>
</div>
);
} 