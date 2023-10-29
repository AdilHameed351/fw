import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast} from "react-toastify";

const Update = ({ display, update }) => {
  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body,
    });
  }, [update]);
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  axios.defaults.withCredentials = true;
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async () => {
    await axios.put(`https://fw-api.vercel.app/api/v2/updateTask/${update._id}`, Inputs).then((response) => {
      toast.success("Your Task Is Updated");
    });
    display("none");
  }
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update" id="update">
        <h3>Update Your Task</h3>
        <input type="text" className="todo-inputs my-4 w-100 p-3" value={Inputs.title} name="title" onChange={change} />
        <textarea className="todo-inputs w-100 p-3" value={Inputs.body} name="body" onChange={change} />
        <div>
            <button className="btn btn-dark mx-1 my-4" onClick={submit}>UPDATE</button>
            <button className="btn btn-danger mx-1 my-4" id="close-btn" onClick={() => { display("none"); }}>CLOSE</button>
        </div>
    </div>
  )
}

export default Update
