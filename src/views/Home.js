import { Link } from 'react-router-dom';
import expectedresult from '../images/result.png';
function Home() {
    return (
        <div>
            <h1>React Level 1</h1>
            <h4>In this example:</h4>
            <div style={{ width: '450px', margin: '0 auto', textAlign: 'left' }}>
                <ul>
                    <li>Configure Todolist component to add items using input</li>
                    <li>Add respective CSS classes to the components</li>
                    <li>Add a close button to each items</li>
                    <li>Remove items by clicking on close button</li>
                </ul>
                <div className="expContainer">
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        Hover here to see expected result
                    </div>
                    <div className="expectedRes">
                        <img src={expectedresult} alt="result" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <Link to="todo">
                Go to todolist
            </Link>
        </div>
    );
}

export default Home;