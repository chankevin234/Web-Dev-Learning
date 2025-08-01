function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitting form!")
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}