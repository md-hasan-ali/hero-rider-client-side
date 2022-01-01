import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Sheard/Navigarion/Navigation';

const Driving = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (data.Password1 !== data.Password2) {
            alert('your password did not match.');
            return;
        }
        console.log(data);
    };
    return (
        <div>
            <Navigation></Navigation>

            <div className="container mb-5">
                <div className="section-title text-center">
                    <h2 className='pt-5'>Ragistrations as Driving Lesson</h2>
                </div>
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="rider-ragistration-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Full Name" {...register("full_name")} />
                                <input placeholder='email' {...register("email", { required: true })} />
                                <input placeholder='Age' {...register("age", { required: true })} />
                                <input placeholder='Address' {...register("Address", { required: true })} />
                                <input placeholder='Phone' {...register("Phone", { required: true })} />
                                <input placeholder='Driving Licence Picture url' {...register("driving_licence_picture", { required: true })} />
                                <input placeholder='Area' {...register("Area", { required: true })} />
                                <input placeholder='NID picture url' {...register("NID_Picture", { required: true })} />

                                <input placeholder='Profile-Picture Url' {...register("profile-picture", { required: true })} />

                                <input placeholder='Car Name' {...register("car-name", { required: true })} />

                                <input placeholder='Car Model' {...register("car-model", { required: true })} />

                                <input type='password' placeholder='Password' {...register("Password1", { required: true })} />

                                <input type='password' placeholder='Confirm_Password' {...register("Password2", { required: true })} />

                                <input className='btn btn-success' type="submit" value='Ragistration Driving Lesson Learner' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Driving;