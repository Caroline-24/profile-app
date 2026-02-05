import { useState } from "react";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");

const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const AppProfileForm = ({ onAddProfile }) => {

    const [values, setValues] = useState({name: "", title: "", email: "", bio: "", image: null}); 
    const [error, setErrors] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState("")

    const {name, title, email, bio, image} = values;
    
    const handleChange = (event) => {
        const {name, value, files} = event.target
        if( name === "image"){
            const file = event.target.files[0]
            if(file && file.size < 1024 * 1024){
                setValues(pre => ({...pre, image:file}));
                setErrors("");
            }else{
                setErrors("Image should be less than 1 MB")
                setValues(pre => ({...pre, image:null}))
            }
        }
        setValues(pre => ({...pre, [name]: value}))
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true)
        setError("")
        setSuccess("")

        try{
        if(!stripTags(trimCollapse(name))
            || !stripTags(trimCollapse(title))
            || !trimCollapse(trimCollapse(bio))
            || !stripTags(trimCollapse(email))){
                SetErrors("Please fill in name, title, email, and description")
                return

        }
        const cleanedData = {
            id: Date.now(),
            name: stripTags(trimCollapse(name)),
            title: stripTags(trimCollapse(title)),
            email: stripTags(trimCollapse(email)),
            bio: trimCollapse((bio)),
            image: URL.createObjectURL(image)

        }

        if (!image) {
            setError("Please upload an image.");
            setIsSubmitting(false);
            return;
        }

        try {
            onAddProfile(cleanedData);

        setValues({ name: "", title: "", email: "", bio: "", image: null });

        setError("");
        setSuccess("Form submitted successfully");

        setTimeout(() => {
            setSuccess("");
        }, 1000);
    } catch (error) {
        setError(error.message || "Something went wrong");
    } finally {
        setIsSubmitting(false);
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
            <input id="name" name="name" required value={name} onChange={handleChange} />
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
