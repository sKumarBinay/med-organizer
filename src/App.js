import React from 'react';
import './App.css';
import schedule from './medicine.json'


function App() {
  const mammiMedLog = schedule[0].mammi
  const dates = Object.keys(mammiMedLog)
  window.onload = () => {
    setCurrentdate()
    if(localStorage.getItem('medicine-organizer') !== 'installed') {
      checkdateCreator()
    }
    checkTracker()
    mapDataOnload()
  }
  return (
    <div className="App">
      {dates.map((d, i) => {
        return <div key={i} className="date-wrapper">
          <div className="display-date" data-date={d}>{d}</div>
          <div className="date">
            <span>Breakfast</span>
            <div className="breakfast">
              {mammiMedLog[d].Breakfast.map((b, i) => {
                return <div className="med-div" key={i}>
                  <input type="checkbox" id={i} key={i} />
                  <label htmlFor={i}>{b}</label>
                </div>
              })}
            </div>
            <span>Lunch</span>
            <div className="lunch">
              {mammiMedLog[d].Lunch.map((b, i) => {
                return <div className="med-div" key={i}>
                  <input type="checkbox" id={i} key={i} />
                  <label htmlFor={i}>{b}</label>
                </div>
              })}
            </div>
            <span>Dinner</span>
            <div className="dinner">
              {mammiMedLog[d].Dinner.map((b, i) => {
                return <div className="med-div" key={i}>
                  <input type="checkbox" id={i} key={i} />
                  <label htmlFor={i}>{b}</label>
                </div>
              })}
            </div>

          </div>
        </div>
      })
      }
    </div>
  );
}

export default App;

function setCurrentdate () {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
  const date = new Date()
  const month = date.getMonth()
  const currDate = date.getDate()
  const required = document.querySelector(`[data-date="${currDate} ${months[month]}"]`)
  required.scrollIntoView()
  required.parentNode.style.opacity = 1
  required.parentNode.style.pointerEvents = 'all'
}

function checkTracker () {
  const allCheckbox = document.querySelectorAll('input')
  allCheckbox.forEach(c => {
    c.addEventListener('change', (e) => {
      const data = JSON.parse(localStorage.getItem('medicine-organizer-data'))
      const index = Array.from(allCheckbox).indexOf(e.target)
      data[index].checked = e.target.checked
      localStorage.setItem('medicine-organizer-data', JSON.stringify(data))
    })
  })
}

function checkdateCreator () {
  localStorage.setItem('medicine-organizer', 'installed')
  const data = []
  const allCheckbox = document.querySelectorAll('input')
  allCheckbox.forEach(c => {
    data.push({
      checked: false
    })
  })
  localStorage.setItem('medicine-organizer-data', JSON.stringify(data))
}

function mapDataOnload () {
  const allCheckbox = document.querySelectorAll('input')
  const data = JSON.parse(localStorage.getItem('medicine-organizer-data'))
  allCheckbox.forEach(c => {
    c.checked = data[Array.from(allCheckbox).indexOf(c)].checked
  })
}