import { useForm } from "react-hook-form";

function SignUpUserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const onSubmit = (data) => {
        // Validate password confirmation
        const password = getValues("password");
        const passwordConfirm = getValues("passwordConfirm");

        if (password !== passwordConfirm) {
            alert("Password and Password Confirmation must match.");
        } else {
            alert(JSON.stringify(data, null, 2));
            console.log(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label className="fname">First Name</label>
            <input
                type="text"
                className="fname"
                {...register("firstName", { required: true })}
            />
            {errors.firstName && (
                <p className="fname">First Name is required</p>
            )}

            <label className="lname">Last Name</label>
            <input
                type="text"
                className="lname"
                {...register("lastName", { required: true })}
            />
            {errors.lastName && (
                <p className="lname">Last Name is required</p>
            )}

            <label className="uname">User Name</label>
            <input
                type="text"
                className="uname"
                {...register("userName", { required: true })}
            />
            {errors.userName && (
                <p className="uname">User Name is required</p>
            )}

            <label className="email">Email</label>
            <input
                type="email"
                className="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
                <p className="email">Must be a valid Email</p>
            )}

            <label className="password">Password</label>
            <input
                type="password"
                className="password"
                {...register("password", { required: true })}
            />
            {errors.password && (
                <p className="password">Password is required</p>
            )}

            <label className="cpassword">Confirm Password</label>
            <input
                type="password"
                className="cpassword"
                {...register("passwordConfirm", { required: true })}
            />
            {errors.confirmPassword && (
                <p className="cpassword">Password Confirmation is required</p>
            )}

            <button className="submit" type="submit">
                Submit
            </button>
        </form>
    );
}

export default SignUpUserForm;
