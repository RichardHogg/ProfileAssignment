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
    picture: {
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
    <>
      {/* Header */}
      <div className='container'>
        <section>
          <form>
            <h1 className='center'>Profiles</h1>
            <input
              type="text"
              placeholder='Search...'
              onChange={(e) => { setSearchField(e.target.value) }}
            />
          </form>
        </section>
      </div>
      <>
        {
          employees.filter(user => {
            return user.name.first.toLocaleLowerCase().includes(searchField.toLowerCase())
          })
            .sort((a, b) => a.name.first.localeCompare(b.name.first))
            .slice(0, 6)
            .map((employee) => {
              return (
                <div key={employee.login.uuid} >
                  {/*Employee cards*/}
                  <section className='container'>
                    <div className='center'>
                      {viewEmployee !== "" ?
                        <div>
                          {

                            viewEmployee === employee.login.uuid ?
                              <article className='card' onClick={(e) => setViewEmployee("")}>
                                <Details
                                  cell={employee.cell}
                                  dob={employee.dob}
                                  email={employee.email}
                                  picture={employee.picture.medium}
                                  firstName={employee.name.first}
                                  lastName={employee.name.last}
                                  location={employee.location}
                                />

                              </article>

                              : <React.Fragment />

                          }
                        </div>

                        : <article onClick={(e) => setViewEmployee(employee.login.uuid)}>
                          <div>
                          <EmployeeSummary
                            email={employee.email}
                            picture={employee.picture.medium}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                          />
                          </div>
                        </article>

                      }
                    </div>
                  </section>
                </div>
              )
            })}
      </>
    </>
  );
}

export default App;
