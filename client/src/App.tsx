import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Details from './Details';
import EmployeeSummary from './EmployeeSummary';

const App = () => {
  const [viewEmployee, setViewEmployee] = useState<string>("")
  const [searchField, setSearchField] = useState<string>("")
  const [employees, setEmployees] = useState<{
    cell: string
    email: string
    dob: {
      age: number
      date: string
    }
    login: {
      uuid: string
    }
    location: {
      city: string
      country: string
      postcode: number
      state: string
    }
    image: {
      medium: string
    }
    name: {
      first: string
      last: string
      title: string
    }
  }[]>([])



  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=20`).then(res => {
      setEmployees(res.data.results)
    }).catch(err => console.log('Error while fetching:', err))
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-lg-12">
          <h1 className="page-header center" style={{ textAlign: 'center' }}>Profiles</h1>
        </div>
        <input
          type="text"
          placeholder='Search...'
          onChange={(e) => { setSearchField(e.target.value) }}
        />
      </div>
      <div className="container">



        {
          employees.filter(user => {
            return user.name.first.toLocaleLowerCase().includes(searchField.toLowerCase())
          })
            .sort((a, b) => a.name.first.localeCompare(b.name.first))
            .slice(0, 6)
            .map((employee, index) => {
              return (
                <div key={'employees' + index} className="row">
                  {/*Employee cards*/}
                  <section className="cards cards">
                    <div className="col-sm-3" style={{ marginBottom: '40px' }}>
                      {viewEmployee != "" ?
                        <div>
                          {

                            viewEmployee == employee.login.uuid ?
                              <article className="card" style={{ textAlign: "center" }} onClick={(e) => setViewEmployee("")}>
                                <Details
                                  cell={employee.cell}
                                  dob={employee.dob}
                                  email={employee.email}
                                  image={employee.image.medium}
                                  firstName={employee.name.first}
                                  lastName={employee.name.last}
                                  location={employee.location}
                                />
                              </article>
                              : <React.Fragment />

                          }
                        </div>

                        : <article className="card" style={{ textAlign: 'center' }} onClick={(e) => setViewEmployee( employee.login.uuid )}>
                          <EmployeeSummary
                            email={employee.email}
                            image={employee.image.medium}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                          />
                        </article>

                      }
                    </div>
                  </section>
                </div>
              )
            })}
      </div>
    </div>
  );
}

export default App;
