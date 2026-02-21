import { useReducer, useRef, useLayoutEffect, useState } from "react";
import formReducer from "../reducers/formReducer";
import { useNavigate } from "react-router-dom";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const initialState = {
    values: {
        name: "",
        title: "",
        email: "",
        bio: "",
        image: "",
    },
    error: "",
    isSubmitting: false,
    success: ""
}

const AppProfileForm = ({ onAddProfile }) => {

    //const [values, setValues] = useState({name: "", title: "", email: "", bio: "", image: null}); 
    //const [error, setErrors] = useState("")
    //const [isSubmitting, setIsSubmitting] = useState(false)
    //const [success, setSuccess] = useState("")
    const [state, dispatch] = useReducer(formReducer, initialState);

    const {values, error, isSubmitting, success} = state;

    const {name, title, email, bio, image} = values;
    const navigate = useNavigate();

    const fieldRef = useRef(null)
    
    useLayoutEffect(() =>{
        if (fieldRef.current) fieldRef.current.focus();
    }, []);
    
    const handleChange = (event) => {
        const {name, value, files} = event.target
        if( name === "image"){
            const file = event.target.files[0]
            dispatch({type: "SET_IMG", payload: file})
            //if(file && file.size < 1024 * 1024){
                //setValues(pre => ({...pre, image:file}));
                //setErrors("");
        } else {
                dispatch ({type: "SET_VALUES", payload: name, value: value})
                //setErrors("Image should be less than 1 MB")
                //setValues(pre => ({...pre, image:null}))
        }
    };
        //setValues(pre => ({...pre, [name]: value}))


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: "START_SUBMITTING"})
        
        //setIsSubmitting(true)
        //setErrors("")
        //setSuccess("")

        try{
        if(!stripTags(trimCollapse(name))
            || !stripTags(trimCollapse(title))
            || !trimCollapse(trimCollapse(bio))
            || !stripTags(trimCollapse(email))
        ) 
        dispatch({ type: "SYSTEM_ERROR", payload: "Please fill in name, title, email, and bio" });
        return;
        const cleanedData = {
            id: Date.now(),
            name: stripTags(trimCollapse(name)),
            title: stripTags(trimCollapse(title)),
            email: stripTags(trimCollapse(email)),
            bio: trimCollapse((bio)),
            image: URL.createObjectURL(image)

        }

        if (!image) {
            dispatch({ type: "SYSTEM_ERROR", payload: "Please upload an image." });
            //setError("Please upload an image.");
            //setIsSubmitting(false);
            //return;
        }
        


        try {
            onAddProfile(cleanedData);
            dispatch({type: "ON_SUBMIT"})

        //setValues({ name: "", title: "", email: "", bio: "", image: null });
        //setError("");
        //setSuccess("Form submitted successfully");
        setTimeout(() => {
            //setSuccess("");
            dispatch({type: "SUBMIT_SUCCESS"})
            navigate("/", { replace: true });
        }, 1000);
    } catch (error) {
        //setError(error.message || "Something went wrong");
        dispatch({type: "SYSTEM_ERROR", payload: error.message})
    } finally {
        //setIsSubmitting(false);
        dispatch({type: "AFTER_SUBMIT"})
    }

    }catch(error){
        setError 
    }

    }
    const disabled =
        !name.trim() ||
        !title.trim() ||
        !email.trim() ||
        !bio.trim() ||
        isSubmitting;

    return(
        <form onSubmit={handleSubmit} className="">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required value={name} onChange={handleChange} ref={fieldRef} />
            <label htmlFor="title">Title</label>
            <input id="title" name="title" required value={title} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" required value={email} onChange={handleChange} />
            <label htmlFor="bio">Add description</label>
            <input id="bio" name="bio" required value={bio} maxLength={200} onChange={handleChange} />
            <label htmlFor="image">Upload an image</label>
            <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} />

            <button disabled = {disabled} >Submit</button> 
            {error&&<p>{error}</p>}
            {success && <p>{success}</p>}
        </form>
    )
}

export default AppProfileForm;
