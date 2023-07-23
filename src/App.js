import './App.css';
import React from 'react'

function App() {

  const [formData, setFormData] = React.useState(
    {
      name: "",
      email: "",
      eligible: "",
      qualification: "",
      reactLibrary: true,
      angularLibrary: false
    }
  )
  console.log(formData)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <main>
          <h2>Form Filler Application</h2>
        <form>
          <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter your name"/>
          <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email address" />
          <div className="eligible_div">
            <label>Are you eligible to apply?</label>
            <input type="radio" name="eligible" value="yes" id="yes" checked={formData.eligible === "yes"} onChange={handleChange}/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="eligible"  value="no" id="no" checked={formData.eligible === "no"} onChange={handleChange} />
            <label htmlFor="no">No</label>
          </div>
          <div>
            <label htmlFor="qualification">Choose your educational qualification</label>
            <select id="qualification" name="qualification" onChange={handleChange}>
              <option>-- Choose --</option>
              <option value="B.Tech">B.Tech</option>
              <option value="B.com">B.com</option>
              <option value="Msc">Msc</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
          </div>
            <br />
            Which library/framework do you prefer?
            <div>
              <input type="checkbox" id="react" name="reactLibrary" checked={formData.reactLibrary} onChange={handleChange} />
              <label htmlFor="react">React JS</label>
            </div>
            <div>
              <input id="angular" type="checkbox" name="angularLibrary" checked={formData.angularLibrary} onChange={handleChange} />
              <label htmlFor="angular">Angular</label>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
      </main>
    </>
  );
}

export default App;
