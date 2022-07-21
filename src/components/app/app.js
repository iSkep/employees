import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Andy L.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Jack B.', salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
               data: newArray
            }
        })
    }

    onToggleIncrease = (id) => {
        // ver. 1
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
        
        // // ver. 2
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id)

        //     const oldItem = data[index];
        //     const newItem = {...oldItem, increase: !oldItem.increase};
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
        //     return {
        //         data: newArray
        //      }
        // })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    render () {
        const employeesCount = this.state.data.length;
        const employeesIncreasedCount = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo 
                    employeesCount={employeesCount}
                    employeesIncreasedCount={employeesIncreasedCount}
                />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm 
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;