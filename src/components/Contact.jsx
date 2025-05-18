import {useState} from 'react';
function Contact() {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        msg: "",
    });

    const input = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value});
    }

    const {name, email, msg} = person;

    return(
        <>
        <div className="contact bg-gradient-to-t from-brand-primary to-brand-dark px-40 py-20">
            <h1 className="text-4xl font-alex text-brand-light ml-6 px-2 inline border-b-4 border-gray-400">Contact Me</h1>
            <div className="px-80 py-20">
                <form action="">
                    <input 
                    type="text" 
                    name="name"
                    placeHolder="Enter your name"
                    required
                    autoComplete="off"
                    onChange = {input}
                    value={person.name} 
                    className=" border border-brand-light bg-transparent h-10 form rounded-lg text-center text-white"
                    />

                    <input 
                    type="email" 
                    name="email"
                    placeHolder="Enter your email"
                    required
                    autoComplete="off"
                    onChange={input}
                    value={person.email} 
                    className=" border border-brand-light bg-transparent h-10 form rounded-lg text-center text-white mt-6"
                    />

                    <textarea 
                    type="text" 
                    name="msg"
                    placeHolder="Enter your message" 
                    required
                    autoComplete="off"
                    onChange={input}
                    value={person.msg}
                    rows= "10"
                    className=" border border-brand-light bg-transparent h-40 form rounded-lg text-center text-white mt-6"
                    ></textarea>

                    <div className="px-40 ml-20">
                        <button className="bg-gradient-to-r from-brand-c1 to-brand-c2 h-10 w-40 rounded-lg border border-brand-c1 text-center text-white font-semibold mt-10">
                        Let's talk
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact;