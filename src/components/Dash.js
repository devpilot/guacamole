import AddTask from './AddTask';
import Tasks from './Tasks';
import Header from './Header'

const Dash = () => {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default Dash;
