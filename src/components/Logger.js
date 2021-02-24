const Logger = ({ onLog }) => {
    return (
        <div>
            <h1 className="header">Activity Log</h1>
            {onLog.map(log => (<p>{log}</p>))}
        </div>
    );
}
 
export default Logger;