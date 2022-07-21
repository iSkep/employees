import './app-info.css';

const AppInfo = ({employeesCount, employeesIncreasedCount}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {employeesIncreasedCount}</h2>
        </div>
    )
}

export default AppInfo;