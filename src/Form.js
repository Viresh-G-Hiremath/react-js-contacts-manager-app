function Form({name, setName, email, setEmail, handleAdd}) {

      const handleName = (e) => {
            setName(e.target.value);
      }

      const handleEmail = (e) =>{
            setEmail(e.target.value);
      }

      return ( 
            <form className="form" onSubmit={handleAdd}>
                  <h2>Add Contact</h2>
                  <div className="inputs">
                        <label htmlFor="name">Name:*</label>
                        <input type="text" value={name} name="name" onChange={handleName} />
                  </div>
                  <div className="inputs">
                        <label htmlFor="email">Email:*</label>
                        <input type="email" value={email} name="email" onChange={handleEmail} />
                  </div>
                  <button type="submit">Add</button>

            </form>
       );
}

export default Form;